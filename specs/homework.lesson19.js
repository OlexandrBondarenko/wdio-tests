import { expect } from '@wdio/globals'
describe ("Homework Lesson 19", () => {

// Test case 1 
// Titile : Sign up with empty email addres

// Steps:
// 1. Go to https://github.com/
// 2. Sroll into [Sign up For GitHub]
// 2. Click on [Sign up for GitHub]

// Expected result: The user is redirected to the registration page where he must enter his email address

xit("Sign up with empty email addres", async() => {
await browser.url(`https://github.com`);

let buttonSUFG = $('form button[type="submit"]')
await buttonSUFG.scrollIntoView()
await buttonSUFG.click()
await expect(browser).toHaveUrl('https://github.com/signup?user_email=&source=form-home-signup')
});
 
// Test case 2
// Title Check input field "Search"

// Steps: 
// 1. Go to https://github.com/
// 2. Click on field "Search"
// 3. Enter word (Exam Cat)
// 4. Choose the first of the proposed options

// Expected result: A results page with the word cat should be displayed

xit("A results page with the word cat should be displayed", async() => {
    await browser.url(`https://github.com`);
    
    let burgerBtn = await $('button[aria-label="Toggle navigation"][aria-expanded="false"][data-view-component="true"]')
    await burgerBtn.click()
    let searchField1 = await $('span[data-target="qbsearch-input.inputButtonText"]')
    await searchField1.click()
    let searchField2 = await $('#query-builder-test')
    await searchField2.setValue("cat")
    let catBtn = await $('#query-builder-test-result-cat')
    await catBtn.click()
    await expect(browser).toHaveUrlContaining("cat")
});

// Test case 3
// Title: User can't Sign in if field "Password" is empty

// Steps: 
// 1. Go to page https://github.com
// 2. Click on button [Sign In]
// 3. Enter valid data in field "Username or email address". (Exam User123)
// 4. Click on buutton [Sign In]

// Expected result: Displayed error message

xit("User can't Sign in if field Password is empty", async() => {
await browser.url(`https://github.com`);
await browser.setWindowSize(1650, 1680)

let buttonSignIn1 = $('a[href="/login"]')
await buttonSignIn1.click()
let fieldUsername = $('#login_field')
await fieldUsername.addValue("User123")
let buttonSignIn2 = $('input[type="submit"]')
await buttonSignIn2.click()
let errorMessage = $('div[class="js-flash-alert"]')
await expect(errorMessage).toHaveText("Incorrect username or password.")
});

// Test case 4

// Title: Users can open Security page in down footer

// Steps:  
// 1. Go to page https://github.com
// 2. Scroll down to down footer
// 3. Click on [Security] button

// Expected result: Open Security page

xit("Users can open Security page in down footer", async() => {
await browser.url(`https://github.com`);

let buttonSecurity = $('a[href="/security"]')
await buttonSecurity.scrollIntoView()
await buttonSecurity.click()
expect (buttonSecurity).toHaveUrl('https://github.com/security')
});

// Test case 5 

// Title: When user click on button [Start a free enterprice trial], he visits this page

// Steps:
// 1. Go to page https://github.com
// 2. Click on button [Start a free enterprice trial]

// Expected result: user visit this page

it("When user click on button Start a free enterprice trial, he visits this page", async() => {
await browser.url(`https://github.com`);

let buttonSFET = $('form button[type="submit"]') 
await buttonSFET.click()
await browser.pause(2000)
})
});