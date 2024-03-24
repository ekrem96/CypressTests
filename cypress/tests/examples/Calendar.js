describe('callendar selection', function(){
	it('nav To Page', function(){
		cy.visit(Cypress.env('url')+'/seleniumPractise/#/');
	});

	it('top deals', function(){
		cy.get('[href="#/offers"]').invoke('removeAttr','target').click();
	});

	it('Select future date', function(){

		const monthNumber = 6;
		const date = '27';
		const year = '2027';

		cy.get('.react-date-picker__inputGroup').click();
		cy.get('.react-calendar__navigation__label__labelText').click();
		cy.get('.react-calendar__navigation__label__labelText').click();
		cy.contains('button',year).click();
		
		//EQ vs :NTH-CHILD
		//EQ(i) will get the elementsFound[i]
		//nth-child will get elementsFound under a specific parent that you select first
		cy.get('.react-calendar__year-view__months__month').eq(monthNumber-1).click();

		cy.contains('abbr', date).click();

		const monthString = monthNumber < 10? '0'+monthNumber : monthNumber;
		const fullDate = year+'-'+monthString+'-'+date;
		cy.get('input[name="date"]').should('have.value',fullDate);
	});

});