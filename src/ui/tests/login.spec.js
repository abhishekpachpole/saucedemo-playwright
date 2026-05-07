import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';

test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('/inventory.html');
});

test('should show error with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('test', 'test');
    expect(await loginPage.isErrorVisible()).toBe(true);
});

test('should show error with empty fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('', '');
    expect(await loginPage.isErrorVisible()).toBe(true);
});

test('should show error for locked out user', async ({ page }) => {
    const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('locked_out_user', 'secret_sauce');
  expect(await loginPage.isErrorVisible()).toBe(true);
});


// test('should login with valid credentials', async ({ page }) => {
//     await page.goto('/');
//     await page.fill('#user-name', 'standard_user');
//     await page.fill('#password', 'secret_sauce');
//     await page.click('#login-button');
//     await expect(page).toHaveURL('/inventory.html');
// });

// test('should show error with invalid credentials', async ({ page }) => {
//     await page.goto('/');
//     await page.fill('#user-name', 'test');
//     await page.fill('#password', 'test');
//     await page.click('#login-button');
//     await expect(page.locator('[data-test="error"]')).toBeVisible();
// });

// test('should show error with empty fields', async ({ page }) => {
//     await page.goto('/');
//     await page.click('#login-button');
//     await expect(page.locator('[data-test="error"]')).toBeVisible();
//     //await expect(page).toHaveURL('/wrong-page.html');
// });