const puppy = require("puppeteer");
// puppy returns promise when applied a function on it

let browserPromise = puppy.launch({
    headless : false,
    defaultViewport : false,
});
const id  = "layida7302@art2427.com";
const pw = "hihello";
let tab; //making tab global
browserPromise.then(function(browser){
    let pagesPromise = browser.pages();
    return pagesPromise;
}).then(function(pages){
    //console.log(pages.length);
    tab = pages[0];
    let pageOpenPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
}).then(function(){
    let idPromise =  tab.type("#input-1", id);
    return idPromise;
}).then(function(){
    let pwPromise = tab.type("#input-2", pw);
    return pwPromise;
}).then(function(){
    let loginPromise = tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
    return loginPromise;
}).then(function(){
    //let waitPromise = tab.waitForSelector("#base-card-1-link", {visible : true});
    let waitPromise = tab.waitForSelector(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled", {visible : true});
    return waitPromise;
}).then(function(){
   // let IpkClickPromise = tab.click("#base-card-1-link");
    let IpkClickPromise = tab.click(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
    return IpkClickPromise;
}).then(function(){
    let waitPromise = tab.waitForSelector("a[data-attr1='warmup']", {visible : true});
    //let waitPromise = tab.waitForSelector(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-line-primary.ui-btn-link.ui-btn-styled", {visible : true});
    return waitPromise;
}).then(function(){
    let arrayBoxClickPromise = tab.click("a[data-attr1='warmup']"); 
    //let arrayBoxClickPromise = tab.click(".ui-btn.ui-btn-normal.playlist-card-btn.ui-btn-line-primary.ui-btn-link.ui-btn-styled");
    return arrayBoxClickPromise;
}).then(function(){
    let waitPromise = tab.waitForSelector(".js-track-click.challenge-list-item", {visible : true});
    //let waitPromise = tab.waitForSelector(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled", {visible : true});
    return waitPromise;
}).then(function(){
    let allButtonsPromise = tab.$$(".js-track-click.challenge-list-item");
    //let solveClickPromise = tab.click(".ui-btn.ui-btn-normal.primary-cta.ui-btn-primary.ui-btn-styled"); 
    return allButtonsPromise;
}).then(function(data){
    let allButtonsUrlsPromise = [];
    for(let i of data) {
        let urlPromise = tab.evaluate(function(ele){
            return ele.getAttribute("href");
        },i);
        allButtonsUrlsPromise.push(urlPromise);
    }
    return Promise.all(allButtonsUrlsPromise);
}).then(function(data){
    let problemSolved = solveQuestion("https://www.hackerrank.com" + data[0]);
    for(let i = 1; i<data.length; i++){
        problemSolved = problemSolved.then(function(){
            return solveQuestion("https://www.hackerrank.com" + data[i]);
        })
    }
}).catch(function(err){
    console.log("error occurred");
})

function solveQuestion(url){
    let problemUrl = url;
    let editorialUrl = url.replace("?", "/editorial?");
    return new Promise (function(resolve, reject){
        tab.goto(editorialUrl).then(function(){
            let answerLangPromise = tab.$$(".hackdown-content h3");
            return answerLangPromise;
        }).then(function(data){
            let ansLangs = [];
            for(let i of data){
                let langPromise = tab.evaluate(function(ele){
                    return ele.textContent;
                },i);
                ansLangs.push(langPromise);
            }
            return Promise.all(ansLangs);
        }).then(function(data){
            for(let i in data){
                if(data[i] == "C++"){
                    let finalAnswerPromise = tab.$$(".highlight").then(function(answer){
                        let answerPromise = tab.evaluate(function(ele){
                            return ele.textContent; //used for taking out inner text
                        }, answer[i]);
                        return answerPromise;
                    });
                    return finalAnswerPromise;
                }
            }
        }).then(function(data){
            return tab.goto(problemUrl).then(function(){
                let checkBoxClickWaitPromise = tab.waitForSelector(".checkbox-input", {visible: true});
                return checkBoxClickWaitPromise;
            }).then(function(){
                let checkBoxClickPromise = tab.click(".checkbox-input");
                return checkBoxClickPromise
            }).then(function(){
                let answerTypePromise = tab.type(".custominput", data);
                return answerTypePromise;
            }).then(function(){
                return tab.keyboard.down("Control").then(function(){
                    return tab.keyboard.press("A").then(function(){
                        return tab.keyboard.press("X");
                    });
                });
            }).then(function(){
                let editorClickPromise = tab.click(".monaco-editor.no-user-select.vs");
                return editorClickPromise;
            }).then(function(){
                return tab.keyboard.press("A").then(function(){
                    return tab.keyboard.press("V").then(function(){
                        return tab.keyboard.up("Control");
                    });
                });
            });
        }).then(function(){
            return tab.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled")
        }).then(function(){
            resolve();
        });
    })
}