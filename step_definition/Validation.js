const { Then, When } = require('@cucumber/cucumber');
const memory = require('@cucumber-e2e/memory2');
const { expect } = require('chai');
const { po } = require('@cucumber-e2e/po2');

Then(/url should be '(.+)'/, async function(expected) {
    const expectedValue = memory.getValue(expected);
    expect(await browser.getUrl()).to.equal(expectedValue)
})

Then(/text of '(.+)' should (be equal to|contain) '(.+)'/, async function(alias, action, expectedText) {
    const element = await po.getElement(alias);
    const actualText = await element.getText();
    switch (action) {
        case "be equal to":
            expect(actualText).to.equal(expectedText)
            break;
        case "contain":
            expect(actualText).includes(expectedText)
            break;
    }
})
