import { expect } from '@wdio/globals'

import MainPage from "./../pages/main.page.js"
import SalaryPage from "./../pages/salary.page.js"
import WorkPage from "./../pages/work.page.js"
import RelocatePage from "./../pages/relocate.page.js"

describe("Dou main page", () => {

it("Howework Lesson 23", async () => {
await browser.url(`https://dou.ua`);

await MainPage.clickOnSalaryBtn()
await browser.pause(2000)

await expect (SalaryPage.itemQL).toHaveTextContaining("КВАРТИЛЬ")

await MainPage.clickOnWorkBtn()
await browser.pause(2000)

await WorkPage.displayedSearchBtn() 
await browser.pause(2000)
await WorkPage.clickOnSearchBtn()
await browser.pause(2000)
await expect (WorkPage.itemExample).toHaveTextContaining("Швидкий перехід")

await MainPage.clickRelocateBtn()
await browser.pause(2000)

await expect (RelocatePage.newsBtn).toHaveTextContaining("Новини")
await expect (RelocatePage.blogsBtn).toHaveTextContaining("Блоги")
await expect (RelocatePage.popularOnForumBtn).toHaveTextContaining("Популярне на форумі")
})
});