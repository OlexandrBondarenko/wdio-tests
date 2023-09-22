class NewsLetterPage {

    get newsletterTitle() {return $('section h1')}
    get workEmailInput() {return $('input[type="email"]')}
    get selectCountry() {return $('select[aria-invalid="false"]')}
    get checkBox() {return $('#gated-agree-marketingEmailOptin1')}
    get subscribeBtn2() {return $('.Primer_Brand__Button-module__Button__text___Z3ocU')}
    
    async clickSelectCountry(){
    await this.selectCountry.click()
    }
    async clickCheckBox(){
    await this.checkBox.click()
    }
    async clickSubscribeBtn2(){
    await this.subscribeBtn2.click()
    }
}
    export default new NewsLetterPage()
    