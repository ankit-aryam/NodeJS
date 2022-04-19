let request = require('request');
let cheerio = require('cheerio');
let getissues = require("./issues");

function reposPage(url, topic){
request(url,cb)

function cb(err, res, body){
    if(err){
        console.err(err);
    }else{
       // console.log(body);
       getRepoLink(body); 
    }
}

function getRepoLink(html){
    let $ = cheerio.load(html);
   // console.log(html);
   
   let headingArr = $('.f3.color-fg-muted.text-normal.lh-condensed');
  // console.log(headingArr);
  // console.log(topic);
  // console.log("-----------------------");
   for(let i=0;i<8;i++){
        let topLink = $(headingArr[i]).find("a");
       // console.log(topLink);
       let mainLink = $(topLink[1]).attr("href");
       // console.log(mainLink);
       let repoName = mainLink.split('/').pop();
       let fullLink = `https://github.com${mainLink}/issues`;
       //console.log(fullLink);
       
       getissues(fullLink, topic, repoName)
   }
  // console.log("-----------------------");

}

}

module.exports = reposPage;