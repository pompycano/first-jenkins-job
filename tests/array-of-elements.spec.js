import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {

    // create beforeEach to navigate to https://practice.cydeo.com/.
    test.beforeEach(async ({ page }) => {
      await page.goto("https://practice.cydeo.com/");
      });

  test('Verify that there are exactly 50 link elements within the <ul> tag.', async ({ 
    page }) => {
        //  this will return an array of all the link elements within the <ul> tag
        let elements = await page.locator("//ul[@class='list-group']/li/a").all();  
        
        expect(elements.length).toBe(50); // this will assert that there are exactly 50 link elements within the <ul> tag

        expect(elements.length).toBeGreaterThanOrEqual(20); // this will assert that there are at least 20 link elements within the <ul> tag
    
    });

  test('Verify that each of the 50 link elements within the <ul> tag is visible & clickable.', async ({ page }) => {

        let elements = await page.locator("//ul[@class='list-group']/li/a").all();  // this will return an array of all the link elements within the <ul> tag
  
        for (let e of elements) {
            
            await expect(e).toBeVisible(); // this will assert that each of the 50 link elements within the <ul> tag is visible
            expect(await e.isVisible()).toBeTruthy(); // this is another way to assert that each of the 50 link elements within the <ul> tag is visible

            
        }

    });

  test('Verify that each of the 50 link elements within the <ul> tag has a href attribute.', async ({ page }) => {

    let elements = await page.locator("//ul[@class='list-group']/li/a").all();

    for (let e of elements) {
      await expect(e).toHaveAttribute("href"); // this will assert that each of the 50 link elements within the <ul> tag has a href attribute
    }

  });
});



/*
1. Verify that there are exactly 50 link elements within the <ul> tag.

2. Verify that each of the 50 link elements within the <ul> tag is visible & clickable.

3. Verify that each of the 50 link elements within the <ul> tag has a href attribute.
*/
