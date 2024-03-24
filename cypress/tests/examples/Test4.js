//if not installed yet use npm install -D cypress-iframe 

/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe';

describe('Test 4', function(){
	it('Iframes',function(){
		cy.visit(Cypress.env('url')+'/AutomationPractice/');
		//frameLoaded: changes the focus of the html page to the Iframe
		cy.frameLoaded('#courses-iframe');
		//iframe() allows you to use get/find commands in the focus
		cy.iframe().find('a[href="mentorship"]').eq(0).click();
		cy.wait(2000);
		cy.iframe().find('.pricing-title').should('have.length',2);
	});
});