class LandingPage
{
    get openWebsite()
    {
        return browser.url("https://www.demoblaze.com/index.html")
    }
    async ExpectToBeOpened()
    {
        await expect(browser).toHaveTitle("STORE");
    }
}
module.exports = new LandingPage()
