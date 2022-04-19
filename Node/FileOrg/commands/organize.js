const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath) {
  //1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns the current working directory of the Node.js process.
    //console.log(srcPath); //undefined
    srcPath = process.cwd();
    //console.log("source path is ",srcPath);
  }

  //2. to create a directory-> organized_files
  // let organizedFiles = srcPath + "/" + "organized_files";
  let organizedFiles = path.join(srcPath, "organized_files");
  //console.log("organized files folder path is ", organizedFiles);
  if (fs.existsSync(organizedFiles) == false) {
    //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    fs.mkdirSync(organizedFiles);
  } else console.log("folder already exists");

  let allFiles=fs.readdirSync(srcPath);
 // console.log(allFiles);

  for(let i=0;i<allFiles.length;i++)
  {
      //let ext=allFiles[i].split(".")[1];
      //console.log(ext);

      let fullPathOfFile=path.join(srcPath, allFiles[i]);
      //1.check if it is a file or folder
      let isFile=fs.lstatSync(fullPathOfFile).isFile();
      //console.log(allFiles[i]+" is "+ isFile);

      if(isFile){
        //1.1 get ext name
        let ext = path.extname(allFiles[i]).split(".")[1];
        //1.2 get folder name from extension
        let folderName=getFolderName(ext);
        //1.3 copy from src folder (srcPath) and paste in dest folder(e.g. document,media etc.)
        copyFileToDest(srcPath, fullPathOfFile, folderName);
      }

  }
}

function getFolderName(ext){
  for(let key in types){
    for(let i=0;i<types[key].length;i++){
      if(types[key][i]==ext){
        //console.log(key);
        return key;
      }
    
    }
   
  }
  return 'miscelleneous';
  
}
  
function copyFileToDest(srcPath, fullPathOfFile, folderName){
  //1. make folder path
  let destFolderPath=path.join(srcPath,"organized_files",folderName);

  //2 check folder if exists, if it does not, then make folder

  if(!fs.existsSync(destFolderPath)){
    fs.mkdirSync(destFolderPath);
  }
  //3. copy file from src folder to dest folder

  //returns the last portion of a path
  let fileName=path.basename(fullPathOfFile);
  let destFileName=path.join(destFolderPath,fileName);
  fs.copyFileSync(fullPathOfFile,destFileName);
  
}

//let srcpath="C:/Users/esssel/Dev/Node/FileOrg/downloads";

//organize(srcpath);

module.exports={
  organize:organize
}