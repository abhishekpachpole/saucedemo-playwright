import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import InventoryPage from '../pages/InventoryPage.js';

let loginPage;
let inventoryPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('should add item to cart', async ({ page }) => {
  await inventoryPage.addToCart();
  expect(await inventoryPage.getCartCount()).toBe('1');
});


test('should go to cart after adding item', async ({ page }) => {
    await inventoryPage.addToCart();
    expect(await inventoryPage.getCartCount()).toBe('1');
    await inventoryPage.goToCart();
    await expect(page).toHaveURL('/cart.html');
});

test('should filter products by name descending', async ({ page }) => {
    await inventoryPage.filterBy("za");
    await expect(inventoryPage.productTitle.first()).toHaveText('Test.allTheThings() T-Shirt (Red)');
});