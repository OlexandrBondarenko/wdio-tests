class MainPage {

    get forumBtn() {return $('a[href="https://dou.ua/forums/"]')}
    get bandBtn() {return $('a[href="https://dou.ua/lenta/"]')}
    get salariesBtn() {return $('a[href="https://jobs.dou.ua/salaries/"]')}
    get searchInput() {return $('#txtGlobalSearch"]')}
    get gameDevBtn() {return $('a[href="https://gamedev.dou.ua/?from=button"]')}
    get relocateBtn() {return $('a[href="https://relocate.dou.ua/?from=button"]')}
    get workBtn() {return $('a[href="https://jobs.dou.ua/"]')}
    
    async clickOnForumBtn() {
    await this.forumBtn.click()
    }
    async clcikOnBandBtn() {
    await this.bandBtn.click()
    }
    async clcikOnGameDevBtn() {
    await this.gameDevBtn.click()
    }
    async setSearchInput(value) {
    await this.searchInput.addValue(value)
    }
    async clickOnSalaryBtn() {
    await this.salariesBtn.click()
    }
    async clickRelocateBtn() {
    await this.relocateBtn.click()
    }
    async clickOnWorkBtn() {
    await this.workBtn.click()
    }
}
    export default new MainPage()