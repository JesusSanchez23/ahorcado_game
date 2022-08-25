
export const letters: string [] = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const words:string[] = [
    'COMIDA','AGUA','PERRO','PARIS'
]

export function randomWord(){
    const random = Math.floor(Math.random() * words.length);

    return words[random];
}