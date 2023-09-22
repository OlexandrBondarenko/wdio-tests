import { expect } from '@wdio/globals'

import SignUpPage from "./../pages/signup.page.js"
import NewsLetterPage from "./../pages/newsletter.page.js"
import PricingPage from "./../pages/pricing.page.js"

describe("Homework Final", () => {


it("Test Case 1", async () => {
    await browser.url(`https://github.com`);
    browser.pause(2000)

    const signUpBtn = await $('a[data-hydro-click-hmac="520d87e8f83281e6946b192f0f840552721c7fcba9b9c36d802e898a816314e2"]')
    await signUpBtn.click()
    await browser.pause(2000)

    await browser.waitUntil(async () => {
    return SignUpPage.emailInput.isDisplayed();
    }, 6000, "Input is not displayed")
    await browser.pause(3000)

    await expect(SignUpPage.welcomeText).toHaveTextContaining("Welcome to GitHub!")
    await browser.pause(2000)

    await SignUpPage.emailInput.setValue("olexandrbondarenkoqa@gmail.com")
    await browser.pause(2000)

    await SignUpPage.clickOnContinueBtn()
    await browser.pause(2000)

    await SignUpPage.passwordInput.setValue("puperpassword1234")
    await browser.pause(3000)

    await SignUpPage.clickOnContinuePasswordBtn()

    await SignUpPage.usernameInput.setValue("User311234")

    await SignUpPage.clickOnContinueUsernameBtn()

    await SignUpPage.checkInput.setValue("y")

    await SignUpPage.clickOnContinueCheckBtn()
});



it("Test Case 2", async () => {
    await browser.url(`https://github.com`);
   
    const header1 = await $('body > div.logged-out.env-production.page-responsive.header-overlay.home-campaign > div.application-main > main > div.position-relative.overflow-hidden > div.container-xl.position-relative.z-2 > div > div > div > h2')
    
    await header1.scrollIntoView()
    await header1.isEnabled()
    
    const startFreeEnterpriceBtn = await $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]')
    
    await startFreeEnterpriceBtn.isDisplayedInViewport()
    await startFreeEnterpriceBtn.click()

    const title1 = await $('main div h1')
    await title1.scrollIntoView()
    await expect (title1).toHaveText("Pick your trial plan")
    
    const enterPriceCloudBtn = await $('a[data-hydro-click-hmac="ee21929bb0b57a49e1db07c204681b1156a96ab7db98bb79c6519a3165ab845f"]')
    await enterPriceCloudBtn.click()
    });


it("Test Case 3", async () => {
    await browser.url(`https://github.com`);
    
    const subscribeBtn = await $('a[href="https://resources.github.com/newsletter/"]')
    await subscribeBtn.scrollIntoView()
    await subscribeBtn.isEnabled()
    await subscribeBtn.isClickable()
    await subscribeBtn.click()
    
    await expect (browser).toHaveUrl('https://resources.github.com/newsletter/')
    
    await NewsLetterPage.newsletterTitle.isEnabled()
    await NewsLetterPage.workEmailInput.setValue("olexandrbondarenkoqa@gmail.com")
    await NewsLetterPage.clickSelectCountry()
    let country = await $('option[value="UA"]')
    await country.click()
    await NewsLetterPage.clickCheckBox()
    await NewsLetterPage.clickSubscribeBtn2()
})


it("Test Case 4", async() => {
    await browser.url(`https://github.com`);
    
    let burgerBtn = await $('button[aria-label="Toggle navigation"][aria-expanded="false"][data-view-component="true"]')
    await burgerBtn.click()
    let searchField1 = await $('span[data-target="qbsearch-input.inputButtonText"]')
    await searchField1.click()
    let searchField2 = await $('#query-builder-test')
    await searchField2.setValue("act")
    let actBtn = await $('#query-builder-test-result-act')
    await actBtn.click()
    await browser.pause(3000)
    let repositories = await $('h3 a[href="/nektos/act"]')
    await expect (repositories).toHaveHrefContaining('act')
})

it("Test Case 5", async() => {
    await browser.url(`https://github.com`);
    
    let burgerBtn = await $('button[aria-label="Toggle navigation"][aria-expanded="false"][data-view-component="true"]')
    await burgerBtn.click()
    let pricingBtn = await $('nav a[href="/pricing"][data-analytics-event]')
    await pricingBtn.click()
    
    await PricingPage.pricingTitle.isDisplayed()
    
    await PricingPage.compareAllFeaturesBtn.scrollIntoView()
    await browser.pause(2000)
    await PricingPage.compareAllFeaturesBtn.click()
    await browser.pause(2000)
    
    await PricingPage.featuresHeader.isEnabled()
})    
});