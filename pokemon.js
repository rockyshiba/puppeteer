const puppeteer = require('puppeteer');

pokemon();

async function pokemon() {
    // setup
    const browser = await puppeteer.launch({
        slowMo: 1000,
        headless: false,
    });

    const page = await browser.newPage();

    // go to pokeapi
    await page.goto("https://pokeapi.co/");

    // listen for request
    await page.setRequestInterception(true);

    // record page requests
    page.on("request", req => {
        if(req.resourceType() === "fetch") {
            if(!req.failure()) {
                console.log(`${req.url()} requested successfully`);
            }
        }
    });

    // record page responses
    page.on("response", async res => {
        console.log(res.url());
    });

    // click
    await page.click("button.Input-module--button--O5LT8");
}