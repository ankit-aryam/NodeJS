let url = "https://github.com/topics";
const request = require("request");
const cheerio = require("cheerio");
const reposPage = require("./repoPage");

request(url,cb);

function cb(err, res, body){
    if(err){
        console.err(err);
    }else{
        topics(body);
    }
}

function topics(html){
    let $=cheerio.load(html);
    //console.log(html);
    let linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
    //console.log(linkElemArr);
    for(let i=0;i<linkElemArr.length;i++){
        let href = $(linkElemArr[i]).attr("href");
       // console.log(href);
       let topic = href.split('/').pop();
      // console.log(topic);
        let fullLink = `https://github.com${href}`;
       // console.log(fullLink);
       reposPage(fullLink, topic);
   }
    
}