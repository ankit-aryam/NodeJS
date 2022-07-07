// Spread operator for Array
// let arr = [1,2,3];

// let arr2 = arr;

// let arr2 = [...arr];
// arr.push(4);
// console.log(arr2);
// console.log(arr);

// Spread for Objects

let obj = {
    name: "Arya",
    Class: "NA",
    Roll_No: 1111,
    Add:{
        Area: "UMB",
        Pin: 134007
    }
}

// let obj2 = {...obj};

// obj.name = "ank"; //for shallow copy
let obj2 = {...obj,Add: {...obj.Add}} //Deep Copy
obj.Add.pin = 11111;



console.log(obj2);
console.log(obj);