const puppeteer = require('puppeteer');

(async () => {
    // setup
    const browser = await puppeteer.launch({
        slowMo: 1000,
        headless: false,
    });

    const page = await browser.newPage();
    
    // go to google
    await page.goto("https://www.google.com");
    await page.screenshot({path: "screenshots/homepage.png"});

    // await browser.close();
})();
