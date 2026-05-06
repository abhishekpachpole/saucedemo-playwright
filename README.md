# SauceDemo Playwright Automation Framework

Automated test suite for [SauceDemo](https://www.saucedemo.com) e-commerce site built with Playwright and JavaScript.

## Framework Structure

src/pages/ — Page Object Model classes
- LoginPage.js
- InventoryPage.js
- CartPage.js
- CheckoutPage.js

src/tests/ — Test suites
- login.spec.js
- inventory.spec.js
- cart.spec.js
- checkout.spec.js

## Test Coverage
- Login — valid, invalid, empty credentials
- Inventory — add to cart, filter products
- Cart — display items, remove items, navigate to checkout
- Checkout — complete order, empty form validation

## Tech Stack
- [Playwright](https://playwright.dev/) — test automation framework
- JavaScript — programming language
- Page Object Model — design pattern

## How to Run

Install dependencies:
```bash
npm install
```

Run all tests:
```bash
npx playwright test
```

View HTML report:
```bash
npx playwright show-report
```
