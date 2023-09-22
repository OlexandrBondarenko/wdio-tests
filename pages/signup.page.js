class SignUpPage{

    get welcomeText() {return $('span[data-target="typing-effect.content"]')}
    get emailInput() {return $('#email')}
    get continueBtn() {return $('#email-container .signup-continue-button')}
    get continuePasswordBtn() {return $('button[data-continue-to="username-container"]')}
    get continueUsernameBtn() {return $('button[data-continue-to="opt-in-container"]')}
    get continueCheckBtn() {return $('button[data-continue-to="captcha-and-submit-container"]')}
    get passwordInput() {return $('#password')}
    get usernameInput() {return $('#login')}
    get checkInput() {return $('input[name="opt_in"]')}
    
async clickOnContinueBtn() {
    await this.continueBtn.waitForClickable({ timeout: 10000 })
    await this.continueBtn.click()
}
async clickOnContinuePasswordBtn() {
    await this.continuePasswordBtn.waitForClickable({ timeout: 10000 })
    await this.continuePasswordBtn.click()
}
async clickOnContinueUsernameBtn() {
    await this.continueUsernameBtn.waitForClickable({ timeout: 10000 })
    await this.continueUsernameBtn.click()
}
async clickOnContinueCheckBtn() {
    await this.continueCheckBtn.waitForClickable({ timeout: 10000 })
    await this.continueCheckBtn.click()
}
    }
    export default new SignUpPage()