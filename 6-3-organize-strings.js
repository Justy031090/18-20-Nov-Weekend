let s1 = 'ghkjshfssdfpoqwebmbsadasd';
let s2 = 'avadakedavrakjdfgjkhfdiuekijkkvnabcdefghijklmnopqrstuvwxyz'

longest = (string1, string2) =>{
    let newString = '';
    string1.length>string2.length ? newString=string1 : newString=string2 ;
    mySet = new Set(newString.split('').sort().join(''))
    return result = Array.from(mySet).join('')
}
console.log(longest(s1,s2))