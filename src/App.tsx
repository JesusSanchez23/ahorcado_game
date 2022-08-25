import { useEffect, useState } from 'react';
import HangImage from './components/HangImage';
import { letters, randomWord } from './helpers/letters';
import './index.css'


function App() {

  const [lose, setLose] = useState(false);
  const [word, setWord] = useState(randomWord());
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));
  const [intentos, setIntentos] = useState(0);
  const [win, setWin] = useState(false);

  useEffect(() => {

    if (intentos === 9) {
      setLose(true);
      return;
    }
  }
    , [intentos])

  // useEffect(() => {

  //   const showWord = () => {
  //     setWord(words[Math.floor(Math.random() * words.length)]);

  //     const hidden = '_ '.repeat(word.length);
  //     setHiddenWord(hidden);
  //   }
  //   showWord();
  // }, [word])
  // determinar si la persona gano
  useEffect(() => {
    const currentHidden = hiddenWord.split(' ').join('');
    // console.log(currentHidden)
    if (currentHidden === word) {
      setWin(true);
    }
    setWin(false);
  }, [hiddenWord])



  const checkLetter = (letter: string) => {
    if (lose) return;
    if (win) return;

    if (!word.includes(letter)) {
      setIntentos(Math.min(intentos + 1, 9));
      return;
    }
    const hiddenWordArray = hiddenWord.split(' ');

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter;

      }
    }
    setHiddenWord(hiddenWordArray.join(' '));
  }

  const resetGame =()=>{
    setWord(randomWord());
    setHiddenWord('_ '.repeat(word.length));
    setLose(false);
    setWin(false);
    setIntentos(0);
  }

  return (
    <div className='App'>

      {/* palabra */}
      <h3>Palabra oculta</h3>
      <HangImage imageNumber={intentos} />

      {/* intentos */}
      <h3>Intentos : {intentos}</h3>

      {(lose) &&
        <p>Perdio vuelve a intentarlo la palabra era {word}</p>}

      {(win) &&
        <p>FELICIDADES!! La palabra fue: {word}</p>}

      {/* imagenes */}
      <h3>{hiddenWord}</h3>

      {/* Botones */}
      {letters.map(letter =>
        <button key={letter} onClick={() => checkLetter(letter)}>{letter}</button>
      )}

      <button onClick={()=>resetGame()}>Nuevo Juego</button>
    </div>
  )
}

export default App
