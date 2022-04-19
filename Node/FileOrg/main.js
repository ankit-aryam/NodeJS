let helpFunc=require("./commands/help");
let orgFunc=require("./commands/organize");
let treeFunc=require("./commands/tree");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command){
    case "tree": treeFunc.tree(path)// do something
    break;
    case "organize": orgFunc.organize(path);  // do something
    break;
    case "help": helpFunc.help(); 
    break;
    default:
        console.log("command not found");
}