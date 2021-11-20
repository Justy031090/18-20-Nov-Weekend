let test1 = 'Dermatoglyphics'
let test2 = 'aba'
let test3 = 'mOose'

isIsogram = (word) =>{
    let counter = 0;
    let newWord = word.toLowerCase().split('').sort()
    for(let i=0; i<=newWord.length-1; i++){
    if (newWord[i] === newWord[i+1])
    counter = 1
    }
    if (counter > 0) return false;
    return true;
} 
isIsogram(test3)


isIsogram2 = (word2) => {
    if (word2.match(/(\w).*\1/i)) return false;
    return true
}
isIsogram2(test3)