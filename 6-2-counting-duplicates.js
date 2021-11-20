let testing = 'th1s Is A Test Str1ng';

duplicateCounter = (str) => {
    let obj = {};
    str = str.toLowerCase().split(' ').join('').split('').sort().join('')
    matching = str.match((/(.)\1+/g))
    matching = matching.join('').split('')
    for (let key of matching){
        obj[key] = obj[key] ? obj[key]+1 : 1
    }
    return obj
} 
console.log(duplicateCounter(testing))