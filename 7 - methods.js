// filter, forEach, map - using for loops, arrays, objects

//forEach

let arr1 = ['start',0,1,2,3,5,6,7,'end'];
let onlyEven = [];
let onlyOdd = [];
let onlyStrings = [];
arr1.forEach((el)=>{
    if (el%2 ==0) onlyEven.push(el);
    else if (el%2 > 0) onlyOdd.push(el);
    else onlyStrings.push(el);
});
console.log(onlyOdd)
console.log(onlyEven)
console.log(onlyStrings)


//map
const package = [
    {
        name: 'Basic',
        price: 10,
        discount: 'Two months free for yearly subscription'
    },
    {
        name: 'Advanced',
        price: 70,
        discount: '150$ discount for yearly subscription'
    },
    {
        name: 'VIP',
        price: 500,
        discount:'700$ discount for yearly subscription'
    }
]
let packages = package.map(pack=>{ 
    return pack.name
});
console.log(packages)


//filter
let bestPrice = package.filter(midRange=>{
   return ( midRange.price > 50 && midRange.price < 100)
})
console.log(bestPrice)