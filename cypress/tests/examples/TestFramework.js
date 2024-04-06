import HomePage from '../pageObjects/HomePage';
import StorePage from '../pageObjects/StorePage';

describe('Framework test',function(){
	let testData;
	const homePage = new HomePage();
	const storePage = new StorePage();

	before(function(){
		cy.fixture('example').then(function(someData){
			testData = someData;
		});
	});

	it('basic page checks',function(){
		cy.visit(Cypress.env('url')+'/angularpractice/');
		homePage.getEditBox().type(testData.name);
		homePage.getGender().select(testData.gender);
		homePage.getTwoWayDaTaBinding().should('have.value', testData.name);
		homePage.getEditBox().should('have.attr','minlength',2);
		homePage.getEnterpreneurBtn().should('be.disabled');
	});

	it('shopping', function(){
		homePage.getShopTab().click();

		testData.productName.forEach(product => {
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
		storePage.getCountryInputField().type(testData.countryFull);
		storePage.getCountrySuggestion().click();
		storePage.getCountrySuggestion().click();
		storePage.getTCCheckbox().check({force:true});
		storePage.getPurchaseBtn().click();
		storePage.getSuccessMessage().should('have.text', 'Success!');
	});
});