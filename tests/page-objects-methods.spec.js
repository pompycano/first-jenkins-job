import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

  //pause for 3 seconds
  //await page.waitForTimeout(3000);

  // title() method will return us the title of the page as a string
  let actualTitle = await page.title();
  console.log("actualTitle = " + actualTitle);

  
});

test("Getting the url of the page", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

  // url() method will return us the url of the page as a string
  let actualUrl = page.url();
  console.log("actualUrl = " + actualUrl);

});

test("Set the window size", async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");

    await page.waitForTimeout(3000);

    //await page.setViewportSize({ width: 800, height: 600 });

    //await page.waitForTimeout(3000);

});