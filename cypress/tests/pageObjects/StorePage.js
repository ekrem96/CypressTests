class StorePage{
	getCheckoutBtn() { return cy.contains('Checkout'); }
	getCountryInputField() { return cy.get('#country'); }
	getTCCheckbox() { return cy.get('#checkbox2'); }
	getPurchaseBtn() { return cy.get('input[value="Purchase"]'); }
	getCartCheckoutBtn(){ return cy.get('.btn-success'); }
	getCountrySuggestion(){ return cy.get('.suggestions a');}
	getSuccessMessage(){ return cy.get('.alert-success strong'); }
	getPriceTotal(){return cy.get('.text-right strong'); }
}

export default StorePage;