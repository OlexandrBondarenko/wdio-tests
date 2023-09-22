import { expect } from '@wdio/globals'

describe ("Homework Lesson 13", () => {

    it("Homework Lesson 13", async () => {
    await browser.url(`https://webdriver.io`)
    
    let burgerBtn = await $('svg[viewBox="0 0 30 30"]')
    await burgerBtn.click()
    await browser.pause(2000)
    
    let apiBtn = await $('a[href="/docs/api"][class="menu__link"]')
    await apiBtn.click()
    await browser.pause(2000)
    
    let blogBtn = await $('a[class="footer__link-item"][href="/blog"]')
    await blogBtn.scrollIntoView()
    await blogBtn.isDisplayed()
    
    let protocolCommandsLink = await $('.pagination-nav__label')
    await protocolCommandsLink.isDisplayedInViewport()
    await protocolCommandsLink.isClickable()
    await protocolCommandsLink.getHTML()
    await protocolCommandsLink.click()
    await browser.pause(2000)
    
    await browser.waitUntil(async () => {
    return $('#webdriver-protocol').isDisplayed();
    }, 5000, "Button is not displayed")
    })
});