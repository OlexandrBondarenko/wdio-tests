class PricingPage{
    get pricingTitle() {return $('h1[class="h2-mktg"]')}
    get compareAllFeaturesBtn() {return $('a[href="#compare-features"]')}
    get featuresHeader() {return $('div[id="audiences"] h2')}


    async clickCompareAllFeaturesBtn() {
    await this.compareAllFeaturesBtn.click()
    }
}
    export default new PricingPage()
    