let fs=require("fs");
let path=require("path");

function treeFn(dirPath){
    if(dirPath==undefined){
        console.log("Please enter a valid path");
        return;
    }
    let doesExist=fs.existsSync(dirPath); //it returns if the path exists
    if(doesExist==true){
        treeHelper(dirPath, " ");
    }
}

function treeHelper(targetPath, indent){
    let isFile = fs.lstatSync(targetPath).isFile(); // it checks is it file or folder
    
    if(isFile==true){
        let FileName=path.basename(targetPath); //Return the last portion of a path
        console.log(indent +"├──"+ FileName);
        return;
    }
    let dirName=path.basename(targetPath);
    console.log(indent+ "└──" + dirName);
    
    let children =fs.readdirSync(targetPath); //Reads the contents of the directory.

    for(let i=0;i<children.length;i++){
        let childPath=path.join(targetPath,children[i]);
        treeHelper(childPath,indent+"\t");
    }
}
// let srcPath="C:/Users/esssel/Dev/Node/FileOrg/Downloads";
// treeFn(srcPath);

module.exports ={
    tree:treeFn
}
