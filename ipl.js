const puppy = require("puppeteer");
const fs = require("fs");
let finalData = [];

async function main(){
    let browser = await puppy.launch({
        headless : false,
        defaultViewport : false,
        args: ["--start-maximized"]
    });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.cricbuzz.com/cricket-scores/30330/mi-vs-csk-1st-match-indian-premier-league-2020");
}

main();