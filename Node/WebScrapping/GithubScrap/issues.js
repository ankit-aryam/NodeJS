const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const pdfkit = require("pdfkit");

function getissues(url, topic, repoName){
    request(url, cb);

    function cb(err, res, body){
        if(err){
            console.log(err);
        }else{
            issues(body);
        }
    }

    function issues(html){
        let $ = cheerio.load(html);
        //console.log(html);
        let issueElemArr = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        let arr = [];
        for(let i=0;i<issueElemArr.length;i++){
            let link = $(issueElemArr[i]).attr("href");
            arr.push(link);

        }
      // console.log(topic,    arr);
     // console.log(repoName);
      let folderPath = path.join(__dirname, topic);

      dirCreator(folderPath);
     let filePath = path.join(folderPath,repoName + ".pdf");

     let text = JSON.stringify(arr);
     
     let pdfDoc = new pdfkit();
     pdfDoc.pipe(fs.createWriteStream(filePath));
     pdfDoc.text(text);
     pdfDoc.end();

     //fs.writeFileSync(filePath);
    // console.log("Succesful");
    }
}

module.exports = getissues;

function dirCreator(folderPath) {
    if(fs.existsSync(folderPath)==false){
        fs.mkdirSync(folderPath);
    }
}
