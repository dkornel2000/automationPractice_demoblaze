class loginWindow
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
    get logout()
    {
        return $("#logout2")
    }
}
module.exports = new loginWindow()