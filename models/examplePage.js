const { expect } = require('@playwright/test');

class examplePage {

  constructor(page) {
      this.page = page;
      this.keyTermInput = page.locator('#automation-id-input');
      this.classificationTermSelect = page.locator('#automation-id-input');
      this.locationTermInput = page.locator('#automatino-id-input');
      this.searchButton = page.locator('#automation-id-button');
      this.listOfSearchSelectors = page.locator('#automation-id-search-items');
    }

    async goToSearchPage() {
      await this.page.goto('/search');
    }

    async searchByClassificationAndLocation(exampleData) {
      await this.searchTermInput.fill(exampleData.search);
      await this.classificationTermSelect.selectOption({value: exampleData.classificationTermInput});
      await this.locationTermInput.fill(exampleData.location);
      await this.searchButton.click();
    }
  }

  module.exports = { examplePage };