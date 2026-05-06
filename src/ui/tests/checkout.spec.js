import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import InventoryPage from '../pages/InventoryPage.js';
import CartPage from '../pages/CartPage.js';
import CheckoutPage from '../pages/CheckoutPage.js';

let loginPage;
let inventoryPage;
let cartPage;
let checkoutPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addToCart();
  await inventoryPage.goToCart();
  await cartPage.checkout();
});

test('should complete checkout successfully', async ({ page }) => {
    await checkoutPage.fillForm('Abhi', 'Pachpole', '411037');
    await checkoutPage.continue();
    await checkoutPage.finish();
    await expect(page).toHaveURL('/checkout-complete.html');
    expect (await checkoutPage.getConfirmationMessage()).toBe('Thank you for your order!');
});

test('should show error with empty checkout form', async ({ page }) => {
    await checkoutPage.fillForm('', '', '');
    await checkoutPage.continue();
    expect(await checkoutPage.isErrorVisible()).toBe(true);
});