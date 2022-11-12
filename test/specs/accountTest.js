const landingPage = require('../pageobjects/landingPage.js');
const registrationWindow = require('../pageobjects/registrationWindow.js');
const loginWindow = require('../pageobjects/loginWindow.js');
const expectChai = require('chai').expect
const fs = require('fs')
let loginData = JSON.parse(fs.readFileSync('test/testData/loginData.json'))

describe ("Registration" , async()=> 
    {  
        // Added a totally useless counter to the name of test case for fun.
        loginData.forEach(({username,password}) => {
        let i = 0  
        i++;  
        xit (`Registration with test data [${i}]`, async()=>
        {
            await browser.setWindowSize(1280, 720);
            browser.deleteCookies();
            await landingPage.openWebsite;
            await landingPage.ExpectToBeOpened;
            await registrationWindow.signUpButton.click();
            await registrationWindow.signUpDialog.waitForDisplayed(),
            await registrationWindow.Register(username, password)

        })
        })
        loginData.forEach(({username,password}) => {
        it ('Login with valid credentials', async()=>
        {
            await browser.setWindowSize(1280, 720);
            await landingPage.openWebsite;
            await landingPage.ExpectToBeOpened;
            await loginWindow.loginButton.click();
            await loginWindow.loginDialog.waitForDisplayed();
            await loginWindow.Login(username, password);
            await loginWindow.loginDialog.waitForDisplayed({reverse:true});
            // await loginWindow.logout.waitForDisplayed()
            // await loginWindow.logout.click()
            // No need to logout because no cookies, session is not stored
        })
        })
    })

