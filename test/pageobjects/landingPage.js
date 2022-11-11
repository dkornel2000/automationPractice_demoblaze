class LandingPage
{
    get openWebsite()
    {
        return browser.url("https://www.demoblaze.com/index.html")
    }
    get signUpButton()
    {
        return $("#signin2")
    }
    get signUpDialog()
        {
            return $("h5[id$='signInModalLabel']")
        }
    get username()
        {
            return $("#sign-username")
        }   
    get password()
        {
            return $("#sign-password")
        }
    get finishRegistration()
        {
            return $("button[onclick='register()']")
        }
    async Login(username,password)
    {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.finishRegistration.click()
    }   
}
module.exports = new LandingPage()
