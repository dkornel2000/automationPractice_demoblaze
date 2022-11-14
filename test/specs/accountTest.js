const landingPage = require('../pageobjects/landingPage.js');
const registration = require('../pageobjects/registration.js');
const login = require('../pageobjects/login.js');

const expectChai = require('chai').expect
const EC = require('wdio-wait-for');

const fs = require('fs')
let loginDataValid = JSON.parse(fs.readFileSync('test/testData/loginDataValid.json'))
let loginDataInvalid = JSON.parse(fs.readFileSync('test/testData/loginDataInvalid.json'))

describe("Registration", async () => {
    // Added a totally useless counter to the name of test case for fun.
    loginDataValid.forEach(({ username, password }) => {
        it('Registration with valid credentials', async () => {
            await browser.setWindowSize(1280, 720);
            browser.deleteCookies();
            await landingPage.openWebsite;
            await landingPage.ExpectToBeOpened;
            await registration.signUpButton.click();
            await registration.signUpDialog.waitForDisplayed(),
                await registration.Register(username, password)
            await browser.waitUntil(await EC.alertIsPresent(), { timeout: 2000, timeoutMsg: "Alert was not displayed" })
            await browser.getAlertText()
            await browser.acceptAlert()
        })
    })
    loginDataValid.forEach(({ username, password }) => {
        it('Login with valid credentials', async () => {
            await browser.setWindowSize(1280, 720);
            await landingPage.openWebsite;
            await landingPage.ExpectToBeOpened;
            await login.loginButton.click();
            await login.loginDialog.waitForDisplayed();
            await login.Login(username, password);
            await login.loginDialog.waitForDisplayed({ reverse: true });
            await expect(login.loginWelcome).toBeClickable();
            await login.LoginValidation();
        })
    })
    loginDataInvalid.forEach(({ username, password }) => {
        it('Login with invalid credentials', async () => {
            await browser.setWindowSize(1280, 720);
            await landingPage.openWebsite;
            await landingPage.ExpectToBeOpened;
            await login.loginButton.click();
            await login.loginDialog.waitForDisplayed();
            await login.Login(username, password);
            await browser.waitUntil(await EC.alertIsPresent(), { timeout: 2000, timeoutMsg: "Alert was not displayed" })
            await browser.acceptAlert()
            await login.loginDialogClose.click()
            await login.loginDialog.waitForDisplayed({ reverse: true });
        })
    })
})

