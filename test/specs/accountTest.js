const landingPage = require('../pageobjects/landingPage.js');
const expectChai = require('chai').expect
const fs = require('fs')
let loginData = JSON.parse(fs.readFileSync('test/testData/loginData.json'))

describe ("Registration" , async()=> 
    {
            loginData.forEach(({username,password}) => {
        it ("Registration with test data", async()=>
        {
            await landingPage.openWebsite
            await browser.setWindowSize(1280, 720)
            await expect(browser).toHaveTitle("STORE");
            await landingPage.signUpButton.click();
            await landingPage.signUpDialog.waitForDisplayed(),
            await landingPage.Login(username, password)
        })
        })
    })

