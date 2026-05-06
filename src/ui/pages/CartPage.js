class CartPage {
    constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('#checkout');
    this.cartItemName = page.locator('[data-test="inventory-item-name"]');
    this.removeButton = page.locator('[data-test="remove-sauce-labs-onesie"]');
  }
  
  async removeItem() {
    await this.removeButton.click();
  }
  
  async checkout() {
    await this.checkoutButton.click();
  }

  async getItemName() {
    return await this.cartItemName.textContent();
  }

}

export default CartPage;