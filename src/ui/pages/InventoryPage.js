class InventoryPage {
    constructor(page) {
    this.page = page;
    this.addToCartSauceLabsOnesie = page.locator('#add-to-cart-sauce-labs-onesie');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.filterDropdown = page.locator('[data-test="product-sort-container"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.productTitle = page.locator('[data-test="inventory-item-name"]');
  }

  async addToCart() {
    await this.addToCartSauceLabsOnesie.click();
  }

  async getCartCount() {
    return await this.cartBadge.textContent();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async filterBy(option) {
    await this.filterDropdown.selectOption(option);
  }
  
}

export default InventoryPage;