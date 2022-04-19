let request=require("request");
let cheerio=require("cheerio")

request("https://www.worldometers.info/coronavirus/",cb);

function cb(err,res,body)
{
    if(err){
        console.error("error",err);
    }
    else {
        handleHtml(body);
    }
}

function handleHtml(html) {
    let selecTool=cheerio.load(html);

    let covidStatsArr=selecTool(".maincounter-number");

    let totalCase=selecTool(covidStatsArr[0]).text();
    console.log("Total Case :- "+totalCase);

    let totalDeath=selecTool(covidStatsArr[1]).text();
    console.log("Total Death :- "+totalDeath);

    let totalRec=selecTool(covidStatsArr[2]).text();
    console.log("Total Recovery :- "+totalRec);
    
}