const puppet = require("puppeteer");
let cheatCode = require("./codes");
let {email, password} = require("./secrets");
// const s = require(".")



let hackerRankLink="https://www.hackerrank.com/auth/login";

let browserOpenPromise = puppet.launch({
    headless: false,
    args: ["--start-maximized"],
    defaultViewport: null, 
    //executablePath: "C:\Program Files\Google\Chrome\Application\chrome.exe",
});

let page;


browserOpenPromise.then(
    function (browser){
        console.log("browser is open");
        let allTabsPromise = browser.newPage();
        return allTabsPromise;
    })

.then(function(newTab){
 page = newTab;
//console.log(hackerRankLink);
    let hackerRankOpenPromise=page.goto(hackerRankLink);
    return hackerRankOpenPromise;
})

.then(function(){
    let emailEnteredPromise=page.type("input[name='username']", email, {delay : 50});
    return emailEnteredPromise;
})
.then(function(){
    let passwordEnteredPromise=page.type("input[name='password']", password, {delay : 50});
    return passwordEnteredPromise;
})
.then(function(){
    let loginToHackkerRank=page.click('button[data-analytics="LoginPassword"]');
    return loginToHackkerRank;
})
.then(function(){
    let clickAlgo=waitAndClick('.topic-card a[data-attr1="algorithms"]', page);
    return clickAlgo;
})
.then(function(){
    let warmupCheck=waitAndClick('input[value="warmup"]', page)
    return warmupCheck;
})
.then(function(){
    let waitFor3Sec=page.waitForTimeout(3000);
    return waitFor3Sec;
})
.then(function(){
    let selectQuestions = page.$$(".challenge-submit-btn");
    return selectQuestions;
})
.then(function(questionsArr){
   // console.log("No. of Questions", questionsArr.length);
    let answer = questionSolver(page, questionsArr[0], cheatCode.answer[0]);
    return answer;
})




function questionSolver(page, question, answer){
    return new Promise(function(resolve, reject){
        let questionWillBeClicked =question.click();
        return questionWillBeClicked.then(function(){
        let selectEditor = waitAndClick('.monaco-editor.no-user-select.vs', page);
        return selectEditor;
    }).then(function(){
        return waitAndClick('.checkbox-input', page);
    }).then(function(){
        let selectCustomInput = waitAndClick('textarea.custominput',page);
        return selectCustomInput;
    }).then(function(){
        return page.type('textarea.custominput', answer, {delay : 10});
    }).then(function(){
        let ctrlPressed = page.keyboard.down("Control");
        return ctrlPressed;
    }).then(function(){
        let aPressed = page.keyboard.press("A");
        return aPressed;
    }).then(function(){
        let xPressed = page.keyboard.press("X", {delay : 100});
        return xPressed;
    }).then(function(){
        let xUnpressed = page.keyboard.up("Control");
        return xUnpressed;
    }).then(function(){
        let selectMainEditor = waitAndClick('.monaco-editor.no-user-select.vs', page);
        return selectMainEditor;
    }).then(function(){
        let ctrlPressed = page.keyboard.down("Control");
        return ctrlPressed;
    }).then(function(){
        let aPressed = page.keyboard.press("A");
        return aPressed;
    }).then(function(){
        let vPressed = page.keyboard.press("V", {delay : 100});
        return vPressed;
    }).then(function(){
        return page.click('.hr-monaco__run-code', {delay : 50});
    })
    .then(function(){
        resolve();
    }).catch(function(){
        reject();
    })
})
}





function waitAndClick(selector, cPage){
    return new Promise(function(resolve, reject){
        let waitForModelPromise=cPage.waitForSelector(selector);
        waitForModelPromise.then(function(){
            let clickModel = cPage.click(selector);
            return clickModel;
        }).then(function(){
            resolve();
        }).catch(function(){
            reject();
        })
    })
}

