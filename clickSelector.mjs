/**
 * Simulates a user clicking on a selector on a page
 * @param {object} page     Page object initiated by puppeteer
 * @param {string} selector CSS selector to be clicked on
 * @param {number} clicks   Determines number of clicks on the selector. Defaults to 1. 
 */
async function clickSelector(page, selector, clicks = 1) {
    const clickTarget = await page.$(selector);
    await clickTarget.click({ clickCount: clicks });
}