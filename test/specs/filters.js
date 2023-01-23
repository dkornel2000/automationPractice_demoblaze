const landingPage = require('../pageobjects/landingPage.js');

const expectChai = require('chai').expect
const EC = require('wdio-wait-for');

const fs = require('fs')
// let filterLaptops = JSON.parse(fs.readFileSync('test/testData/filterLaptops.json'))
// let filterMobiles = JSON.parse(fs.readFileSync('test/testData/filterMobiles.json'))
// let filterMonitors = JSON.parse(fs.readFileSync('test/testData/filterMonitors.json'))

describe("Testing the filter function", async () => {
    it("Validating phone filter function", async () => {
        await browser.setWindowSize(1280, 720);
        await landingPage.openWebsite;
        await landingPage.ExpectToBeOpened;
        await $(`.hrefch[href='prod.html?idp_=1']`).scrollIntoView();

        //Creates an array with the name of ALL products on the page, no matter how many are there.
        let phones = []
        for(i = 1;await $(`.hrefch[href='prod.html?idp_=${i}']`).isExisting(); i++){
            if(await $(`.hrefch[href='prod.html?idp_=${i}']`).isExisting()){
                await $(`.hrefch[href='prod.html?idp_=${i}']`).scrollIntoView();
                let phoneName = await $(`.hrefch[href='prod.html?idp_=${i}']`).getText()
                phones.push((phoneName))
            }
        }
        console.log(await phones)

})
})