let mumbling = 'mUmbLinG';

mumble = (str) => {
    newArr = [];
    str = str.split('')
    for(let i=0; i<str.length; i++){
        newArr.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i))
    } return newArr;
}
console.log(mumble(mumbling))