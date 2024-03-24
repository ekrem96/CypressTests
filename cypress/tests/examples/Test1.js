/// <reference types="Cypress"/>

describe('My first test case', function(){
	it('My first test step', function(){
		cy.visit(Cypress.env('url')+'/seleniumPractise/#/');
		//.type = sendKeys from Selenium
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);
		
		//:visible shows only visible elements.
		//if omited then it will show all elements included invisible elements.
		cy.get('.product:visible').should('have.length',4);

		//as: creates an alias from a locator.
		//alias can be called by putting '@' in front
		cy.get('.products').as('productLocator');

		//parent - child chaining
		//find: find element of type X wihting scope of 'get'
		cy.get('@productLocator').find('.product').should('have.length',4);

		//eq: find element within aray with given index
		//contains: finds element containing a given text
		cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

		//each: loops throug all found elements
		cy.get('@productLocator').find('.product').each(($element) => {
			const productName = $element.find('.product-name').text();
			if(productName.includes('Carrot')){
				//click will not work if it's not wrapped
				cy.wrap($element).find('button').click();
			}
		});

		//then: needs a function and waits for the promess (async callback) to be resolved
		//text is NOT a cypress method so it runs async. that's why then() is needed to wait for the promess of 'get()' to be resolved
		cy.get('.brand').then((logElement) => {
			//log:writes in the logs and nothing else
			cy.log(logElement.text());
		});

		cy.get('.brand').should('have.text','GREENKART');
	});
});