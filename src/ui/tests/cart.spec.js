import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import InventoryPage from '../pages/InventoryPage.js';
import CartPage from '../pages/CartPage.js';

let loginPage;
let inventoryPage;
let cartPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addToCart();
  await inventoryPage.goToCart();
});

test('should display item in cart', async ({ page }) => {
    expect (await cartPage.getItemName()).toBe('Sauce Labs Onesie');
});

test('should remove item from cart', async ({ page }) => {
    await cartPage.removeItem();
    await expect(inventoryPage.cartBadge).not.toBeVisible();
});

test('should navigate to checkout', async ({ page }) => {
    await cartPage.checkout();
    await expect(page).toHaveURL('/checkout-step-one.html');
});
