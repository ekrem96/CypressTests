class HomePage{
	getEditBox(){ return cy.get('.form-group input[name="name"]'); }
	getTwoWayDaTaBinding(){	return cy.get('h4 input[name="name"]');	}
	getGender(){ return cy.get('#exampleFormControlSelect1'); }
	getEnterpreneurBtn() { return cy.get('#inlineRadio3'); }
	getShopTab(){ return cy.get(':nth-child(2) > .nav-link'); } 
}

export default HomePage;