class registrationWindow
{
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
get register()
    {
        return $("button[onclick='register()']")
    }
async Register(username,password)
    {
        await this.username.setValue(username)
        await this.password.setValue(password)
        await this.register.click()
    }   
}
module.exports = new registrationWindow()