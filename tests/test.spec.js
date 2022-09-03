const { test, expect } = require('@playwright/test');
const {examplePage} = require('../../models/examplePage');
const exampleData = require('../../fixture/exampleData');

test.describe('should filter a search list', () => {
  
  let examplePage; 

  test.beforeEach(async ({ page }) => {

    examplePage = new examplePage(page);  
    await examplePage.goToSearchPage(); 

  });

  test('should search for cheese and return two items', async ({ page }) => {

    //Act    
    await examplePage.searchByClassificationAndLocation(exampleData.CheeseSearch);

    //Assert
    expect(await examplePage.listOfSearchSelectors.count()).toEqual(2);

  });

  test('should search for bread and return five items', async ({ page }) => {

    //Act
    await examplePage.searchByClassificationAndLocation(exampleData.BreadSearch);

    //Assert
    expect(await examplePage.listOfSearchSelectors.count()).toEqual(5);

  });

});
