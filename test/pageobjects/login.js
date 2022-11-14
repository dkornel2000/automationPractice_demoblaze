class login
{
    get loginButton()
    {
        return $("#login2")
        }
    get loginDialog()
    {
        return $("#logInModalLabel")
    }
    get username()
    {
        return $("#loginusername")
    }   
    get password()
    {
        return $("#loginpassword")
    }
    get login()
    {
        return $("button[onclick='logIn()']")
    }
    async Login(username,password)
    {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.login.click()
    }
    get loginWelcome()
    {
        return $("div li:nth-child(7)")
    }
    async LoginValidation()
    {
        await expect(this.loginWelcome).toHaveTextContaining('Welcome')
    }
    get loginDialogClose()
    {
         return $("div[id='logInModal'] button[aria-label='Close']")
    }
}
module.exports = new login()