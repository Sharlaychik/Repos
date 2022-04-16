const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })

    it('should demonstrate the getAttribute command', () => {
        browser.url('https://webdriver.io');
        const input = $('#search_input_react');
        let attr = input.getAttribute('title')
        console.log("Title attribute is: " + attr) // outputs: "Search"

        input.setValue('test123');
        attr = input.getAttribute('value')
        console.log("Value attribute is: " + attr) // outputs: test123
    })

    it('should demonstrate the addValue command', () => {
        browser.url('https://webdriver.io')
        let input = $('#search_input_react')
        input.addValue('test')
        browser.pause(4000);
        input.addValue(123)
        browser.pause(2000);

        value = input.getValue()
        assert(value === 'test123') // true
    })

})