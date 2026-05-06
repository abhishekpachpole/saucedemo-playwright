class CheckoutPage {
    constructor(page) {
    this.page = page;
    this.firstNameField = page.locator('#first-name');
    this.lastNameField = page.locator('#last-name');
    this.postalCodeField = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.confMsg = page.locator('[data-test="complete-header"]');
    this.errorMessage1 = page.locator('[data-test="error"]')
  }

  async fillForm(firstName, lastName, postalCode) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.postalCodeField.fill(postalCode)
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async getConfirmationMessage() {
    return await this.confMsg.textContent();
  }

  async isErrorVisible() {
    return await this.errorMessage1.isVisible();
  }

}

export default CheckoutPage;