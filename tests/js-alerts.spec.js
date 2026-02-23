import { test } from '@playwright/test';

test.describe('Test Group', () => {

    // create beforeEach to navigate to https://practice.cydeo.com/javascript_alerts.
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/javascript_alerts");
    });


  test('Regular Alert', async ({ page }) => {
    page.on("dialog", async (alert) => {   // this will listen for the alert and handle it
        console.log(alert.message()); // this will print the message of the alert   
        alert.accept(); // this will accept the alert
    });

    let clickForJSAlertButton = page.locator("//button[@onclick='jsAlert()']"); 
    await clickForJSAlertButton.click();   

  });

  test('Confirmation Alert', async ({ page }) => {

    page.on("dialog", async (alert) => {   // this will listen for the alert and handle it
        console.log(alert.message());
        alert.dismiss(); // this will dismiss the alert
    });

    let clickForJSConfirmButton = page.locator("//button[@onclick='jsConfirm()']");
    await clickForJSConfirmButton.click();


  });

  test('Prompt Alert', async ({ page }) => {

    page.on("dialog", async (alert) => {   // this will listen for the alert and handle it
        console.log(alert.message());
        await alert.accept("Cydeo"); // this will accept the alert and send "Cydeo" as input to the prompt
    });

    let clickJSPromptAlertButton = page.locator("//button[@onclick='jsPrompt()']");
    await clickJSPromptAlertButton.click();

    await page.waitForTimeout(3000);


  });
});
