const {test, expect } = require('@playwright/test');
import { ALL_BOOKS_LIST, CREATE_FORM, DETAILS_BUTTON, DETAILS_DESCRIPTION, LOGGED_NAVBAR, NAVBAR } from '../utils/locator.js';
import { ALERT, BASE_URL, TEST_BOOK, TEST_URL, TEST_USER } from '../utils/constants.js';
import { LOGIN_FORM } from '../utils/locator.js';
//Navigation
test("Verify All books- link is visiable- example 1", async({page})=>{

await page.goto('http://localhost:3000');

await page.waitForSelector('nav.navbar')
const allBooksLink= await page.$('a[href="/catalog"]');
const isLinkVisiable= await allBooksLink.isVisible();
expect(isLinkVisiable).toBe(true);
})

test("Verify All books- link is visiable- example 2", async({page})=>{

    await page.goto(BASE_URL);

    await expect(page.locator(NAVBAR.NAV_NAVBAR)).toBeVisible();
    
    await expect(page.locator(NAVBAR.ALL_BOOKS_LINK)).toBeVisible();
    

    })

 test("Verify Login button is visiable", async({page})=>{

        await page.goto(BASE_URL);
    
        await expect(page.locator(NAVBAR.NAV_NAVBAR)).toBeVisible();
        
        await expect(page.locator(NAVBAR.LOGIN_BUTTON)).toBeVisible();
        
    })

test("Verify Register button is visiable", async({page})=>{

            await page.goto(BASE_URL);
        
            await expect(page.locator(NAVBAR.NAV_NAVBAR)).toBeVisible();
            
            await expect(page.locator(NAVBAR.REGISTER_BUTTON)).toBeVisible();
            
    })
test("Verify All books link is visiable after user login", async ({page})=>{
    await page.goto(BASE_URL);

    await expect(page.locator(NAVBAR.LOGIN_BUTTON)).toBeVisible();

    await page.locator(NAVBAR.LOGIN_BUTTON).click();

    await expect(page.locator(LOGIN_FORM.LOGIN_FORM)).toBeVisible();

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);
    await page.locator(LOGIN_FORM.LOGIN_BUTTON).click();
 
    await page.waitForURL(TEST_URL.TEST_CATALOG_URL);
    expect(page.url()).toBe(TEST_URL.TEST_CATALOG_URL);
})

test("Verify user email is visiable after user login", async ({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);

    await expect(page.locator(LOGIN_FORM.LOGIN_FORM)).toBeVisible;

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);
    await page.locator(LOGIN_FORM.LOGIN_BUTTON).click();
 
    await page.waitForURL(TEST_URL.TEST_CATALOG_URL);
    expect(page.url()).toBe(TEST_URL.TEST_CATALOG_URL);

    await expect(page.locator(LOGGED_NAVBAR.USER_EMAI)).toBeVisible();
    await expect(page.locator(LOGGED_NAVBAR.MY_BOOK)).toBeVisible();
    await expect(page.locator(LOGGED_NAVBAR.ADD_BOOK)).toBeVisible();



})

//Login form

test("Login with valid credentials", async({page})=>{
   await page.goto(TEST_URL.TEST_LOGIN_URL);

    //await expect(page.locator(LOGIN_FORM.LOGIN_FORM)).toBeVisible();

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);
    await page.locator(LOGIN_FORM.LOGIN_BUTTON).click();
 
    await page.waitForURL(TEST_URL.TEST_CATALOG_URL);
    expect(page.url()).toBe(TEST_URL.TEST_CATALOG_URL);    

})


test("Login with empty inpit field", async({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);
    await page.locator(LOGIN_FORM.LOGIN_BUTTON).click();
  
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain(ALERT.ALERT_MESSAGE)
        await dialog.acept();
    })

    await page.waitForURL(TEST_URL.TEST_LOGIN_URL);
    expect(page.url()).toBe(TEST_URL.TEST_LOGIN_URL);    
 
 })
 test("Login with empty email field", async({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);
   
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);
    await page.locator(LOGIN_FORM.LOGIN_BUTTON).click();
  
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain(ALERT.ALERT_MESSAGE)
        await dialog.acept();
    })

    await page.waitForURL(TEST_URL.TEST_LOGIN_URL);
    expect(page.url()).toBe(TEST_URL.TEST_LOGIN_URL);    
 
 })
 test("Login with empty password field", async({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);
   
    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.LOGIN_BUTTON).click();
  
    page.on('dialog', async dialog=> {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain(ALERT.ALERT_MESSAGE)
        await dialog.acept();
    })

    await page.waitForURL(TEST_URL.TEST_LOGIN_URL);
    expect(page.url()).toBe(TEST_URL.TEST_LOGIN_URL);    
 
 })

 //Add book page
 test("Add book with correct data", async ({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);

    await Promise.all(
        [
             page.locator(LOGIN_FORM.LOGIN_BUTTON).click(),
            page.waitForURL(TEST_URL.TEST_CATALOG_URL)
        ]);

        await page.locator(LOGGED_NAVBAR.ADD_BOOK).click();
        await page.locator(CREATE_FORM.TITLE).fill(TEST_BOOK.TITLE);
        await page.locator(CREATE_FORM.DESCRIPTION).fill(TEST_BOOK.DESCRIPTION);
        await page.locator(CREATE_FORM.IMAGE).fill(TEST_BOOK.IMAGE);
        await page.locator(CREATE_FORM.TYPE_OPTION).selectOption(TEST_BOOK.TEST_BOOK_OPTIONS);
        await page.locator(CREATE_FORM.ADD_BOOK_BUTTON).click();

        await page.waitForURL(TEST_URL.TEST_CATALOG_URL);
        expect(page.url()).toBe(TEST_URL.TEST_CATALOG_URL);
        
    
 })


 //All books page
 test("Login and verify that all books are displayed", async({page}) =>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);

    await Promise.all(
        [
             page.locator(LOGIN_FORM.LOGIN_BUTTON).click(),
            page.waitForURL(TEST_URL.TEST_CATALOG_URL)
        ]);

        //const allBooksElements = page.locator(ALL_BOOKS_LIST)
        //expect(allBooksElements.count()).toBeGreaterThan(0);

       const booksCount= await page.locator('li.otherBooks').count();
       expect(booksCount).toBeGreaterThan(0);
        
 })
 test("Login and navigate to details page", async ({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);

    await Promise.all(
        [
             page.locator(LOGIN_FORM.LOGIN_BUTTON).click(),
            page.waitForURL(TEST_URL.TEST_CATALOG_URL)
        ]);

      await page.locator(DETAILS_BUTTON).first().click();
      await expect(page.locator(DETAILS_DESCRIPTION)).toBeVisible();
  
    
 })

 //Logout functionality

 test("Verify that Logout button is visiable after login", async ({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);

    await Promise.all(
        [
             page.locator(LOGIN_FORM.LOGIN_BUTTON).click(),
            page.waitForURL(TEST_URL.TEST_CATALOG_URL)
        ]);

        await expect(page.locator(LOGGED_NAVBAR.LOGOUT_BUTTON)).toBeVisible();
 })
 test("Verify that Logout button redirect correctly", async ({page})=>{
    await page.goto(TEST_URL.TEST_LOGIN_URL);

    await page.locator(LOGIN_FORM.EMAIL).fill(TEST_USER.EMAIL_FIELD);
    await page.locator(LOGIN_FORM.PASSWORD).fill(TEST_USER.PASSWORD_FIELD);

    await Promise.all(
        [
             page.locator(LOGIN_FORM.LOGIN_BUTTON).click(),
            page.waitForURL(TEST_URL.TEST_CATALOG_URL)
        ]);

        await page.locator(LOGGED_NAVBAR.LOGOUT_BUTTON).click();

        await page.waitForURL(TEST_URL.TEST_HOME_URL);
        expect(page.url()).toBe(TEST_URL.TEST_HOME_URL);

        await expect(page.locator(NAVBAR.LOGIN_BUTTON)).toBeVisible();
        await expect(page.locator(LOGGED_NAVBAR.USER_EMAI)).toBeHidden();
 })