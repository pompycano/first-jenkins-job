import { test } from '@playwright/test';

test('@env-test Testing environment variables', async ({ page }) => {

   // console.log(process.env.PRACTICE_USERNAME); // this will print the value of the environment variable PRACTICE_USERNAME
  //  console.log(process.env.PRACTICE_PASSWORD); // this will print the value of the environment variable PRACTICE_PASSWORD

    console.log(`Username: ${process.env.PRACTICE_USERNAME}`); // this will print the value of the environment variable PRACTICE_USERNAME in a formatted string
    console.log(`Password: ${process.env.PRACTICE_PASSWORD}`); // this will print the value of the environment variable PRACTICE_PASSWORD in a formatted string

});

test('Bypass authentication by encoding the credentials base64 format', async ({ page }) => {

   let encodedCredential = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64"); // this will encode the credentials in base64 format

   await page.setExtraHTTPHeaders({'Authorization': `Basic ${encodedCredential}`}); // this will set the Authorization header with the encoded credentials
  
    await page.goto("https://practice.cydeo.com/basic_auth");

    await page.waitForTimeout(3000);
   
});
