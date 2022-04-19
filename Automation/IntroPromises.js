const fs=require("fs");

console.log("before");

//synchronous working

let data=fs.readFileSync("f1.txt");
console.log(data+"");

//asynchronous working

fs.readFile("f2.txt",cb);

function cb(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data+"");
    }
}

//promises working

let promiseThatWillBeRead = fs.promises.readFile("f1.txt");
console.log(promiseThatWillBeRead);

promiseThatWillBeRead.then(printData);
promiseThatWillBeRead.catch(printError);

function printData(data){
    console.log("promise is fulfilled");
    console.log(data+"");
}

function printError(data){
    console.log(err);
}