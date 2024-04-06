const { Given,When,Then} = require('@badeball/cypress-cucumber-preprocessor');
import HomePage from '../../../pageObjects/HomePage';
import StorePage from '../../../pageObjects/StorePage';

const homePage = new HomePage();
const storePage = new StorePage();

Given('I open the Ecommerce page',()=>{
	cy.visit(Cypress.env('url')+'/angularpractice/');
});

When('I add items to Cart',()=>{
	homePage.getShopTab().click();

	testData.productName.forEach((product) => {
		cy.selectProduct(product); 
	});

	storePage.getCheckoutBtn().click();
	let sum = 0;
	cy.get('tr td:nth-child(4) strong').each((element)=>{
		const amount = element.text();
		let result = amount.split(' ')[1].trim();
		sum += Number(result);
		cy.log(sum);
	});
		
	storePage.getPriceTotal().then((element)=>{
		const total = element.text().split(' ')[1].trim();
		expect(Number(total)).to.equal(sum,'sum is not equal to total');
	});

	storePage.getCartCheckoutBtn().click();
});

Then('Validate the total prices',function(){
	storePage.getPriceTotal().then((element)=>{
		const total = element.text().split(' ')[1].trim();
		expect(Number(total)).to.equal(sum,'sum is not equal to total');
	});
});

Then('select the country submit and verify Thankyou',()=>{
	storePage.getCartCheckoutBtn().click();
	storePage.getCountryInputField().type(testData.countryFull);
	storePage.getCountrySuggestion().click();
	storePage.getCountrySuggestion().click();
	storePage.getTCCheckbox().check({force:true});
	storePage.getPurchaseBtn().click();
	storePage.getSuccessMessage().should('have.text', 'Success!');
});


When('I fill the form details',function(dataTable){
	homePage.getEditBox().type(dataTable.rawTable[1][0]);
	homePage.getGender().select(dataTable.rawTable[1][1]);
});

Then('validate the froms behaviour',function(dataTable){
	homePage.getTwoWayDaTaBinding().should('have.value', dataTable.rawTable[1][0]);
	homePage.getEditBox().should('have.attr','minlength',2);
	homePage.getEnterpreneurBtn().should('be.disabled');
});

Then('select the shop page', function(){
	homePage.getShopTab().click();
});