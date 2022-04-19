//fs->file system module -> it makes files/folders append data in them, delete data, read data.
const fs = require("fs"); // require ("path of file")
//const f1=reqire("./f1.txt"); // single dot means out of this file and ___path
//const abc=require("../Node JS/temp"); //double dot means out of this folder
//console.log(abc);

//console.log(fs);
//appendFileSync appends data into a file , if file not present, it creates the file and then appends the data 
let res=fs.appendFileSync("f1.txt","Hello");
fs.appendFileSync("f1.text","\nWorld");
console.log(res);

//let data = fs.readFileSync("f1.txt");
// console.log(data+"");

//let data = fs.readFileSync("f1.txt");
//console.log(data);

