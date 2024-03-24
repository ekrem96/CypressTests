/// <reference types="Cypress"/>

describe('checkout items test', function(){
	it('checkout items', function(){
		cy.visit(Cypress.env('url')+'/seleniumPractise/#/');
		cy.get('.search-keyword').type('ca');
		cy.wait(2000);

		cy.get('.products').as('productLocator');
		cy.get('@productLocator').find('.product').each(($element) => {
			const productName = $element.find('.product-name').text();
			if(productName.includes('Carrot')){
				//click will not work if it's not wrapped
				cy.wrap($element).find('button').click();
			}
		});

		cy.get('.cart-icon > img').click();
		cy.contains('PROCEED TO CHECKOUT').click();
		cy.contains('Place Order').click();
	});
});