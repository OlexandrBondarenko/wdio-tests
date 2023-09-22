import { expect } from '@wdio/globals'
describe ("Homework Lesson 8", () => {

it("Homework Lesson 8", async () => {
    await browser.url(`https://webdriver.io`)
    
    let burgerBtn = await $('svg[viewBox="0 0 30 30"]')
    await burgerBtn.click()
    await browser.pause(2000)
    
    let apiBtn = await $('a[href="/docs/api"][class="menu__link"]')
    await apiBtn.click()
    await browser.pause(2000)
    
    await expect (browser).toHaveUrl(`https://webdriver.io/docs/api`)
    
    let apiTitle = $('header h1')
    await apiTitle.isEnabled()
    
    let WebDriverBtn = await $('a[href="/docs/api/webdriver"]')
    await expect (WebDriverBtn).toHaveLink('/docs/api/webdriver')
    
    let searchBtn = await $('button[aria-label="Search"]')
    await searchBtn.click()
    await browser.pause(2000)
    
    let searchInput = await $('#docsearch-input')
    await searchInput.setValue("all is done")
    await browser.pause(2000)
    
    let xBtn = $('button[class="DocSearch-Reset"]')
    await xBtn.click()
    await browser.pause(2000)
    })
    
    });