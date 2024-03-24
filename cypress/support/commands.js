/* eslint-disable linebreak-style */
Cypress.Commands.add('selectProduct', (productName) => {
	cy.get('h4.card-title').each((element, index) => {
		if(element.text().includes(productName)){
			cy.get('.btn-info').eq(index).click();
		}
	});
});