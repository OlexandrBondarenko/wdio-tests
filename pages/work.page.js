class WorkPage {
    get searchBtn() {return $('.btn-search')}
    get itemExample() {return $('.example')}
    
    async displayedSearchBtn() {
    await this.searchBtn.isDisplayed()
    }
    async clickOnSearchBtn() {
    await this.searchBtn.click()
    }
}
export default new WorkPage