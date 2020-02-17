import puppeteer from "puppeteer";

(async () => {
    try {
        // setup
        const browser = await puppeteer.launch({
            slowMo: 500,
            headless: false,
        });

        const page = await browser.newPage();
        await page.goto("https://www.google.com");

        typeSelectorEnter(
            page,
            "input.gLFyf.gsfi",
            "cats"
        );
    } catch(err) {
        console.log(err);
    }
})();

/**
 * Simulates a user selecting a selector, clicking 3 times into it to select all text, then typing to replace that text, then pressing Enter
 * @param {object} page     Page object initated by puppeteer
 * @param {string} selector CSS selector, usually an input
 * @param {string} text     Text for the selector
 */
async function typeSelectorEnter(page, selector, text) {
    const input = await page.$(selector);
    await input.click({ clickCount: 3});
    await input.type(text);

    // press enter
    await page.keyboard.press("Enter");
}