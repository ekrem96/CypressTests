
describe('Test 3',function(){
	it('check boxes',function(){
		cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/');
		//check: checks the checkbox on
		//be vs have ==> have = property value inside, be = behaviour (state)
		//and: concats 'should'
		cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
		cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
		cy.get('input[type="checkbox"]').check(['option2','option3']);

		//this also works for radio buttons
	});

	it('drop downs', function(){
		//static dropdown
		cy.get('select').select('option2').should('have.value','option2');

		//dynamic dropdown
		cy.get('#autocomplete').type('bel');
		cy.get('.ui-menu-item div').each((element) =>{
			if(element.text() === 'Belgium'){
				element.click();
			}
		});

		cy.get('#autocomplete').should('have.value','Belgium');
	});

	it('invisible objects', function(){
		cy.get('#displayed-text').should('be.visible');
		cy.get('#hide-textbox').click();
		cy.get('#displayed-text').should('not.be.visible');
		cy.get('#show-textbox').click();
		cy.get('#displayed-text').should('be.visible');
	});

	it('popups', function(){
		//cypress automatically handles alert and confirm popups
		cy.get('#alertbtn').click();
		cy.get('input[value="Confirm"]').click();

		//on alert triggered
		cy.on('window:alert',(str) => {
			//this is outside of cypress so you need to use mocha test
			expect(str).to.equal('Hello , share this practice page and share your knowledge');
		});

		cy.on('windows:confirm',(str) => {
			expect (str).to.equal('Hello , Are you sure you want to confirm?');
		});
	});

	it('change tabs', function(){
		cy.visit(Cypress.env('url')+'/AutomationPractice/');
		//if page opens in a new tab remove the atribute (Attr) named 'target' and then click
		cy.get('#opentab').invoke('removeAttr','target').click();

		//since we change to a new website we need to change the origin
		//all actions in this website needs to be wrapped in the function
		cy.origin('https://www.qaclickacademy.com',()=>{
			cy.get('.mt-50 h2').should('contain','QAClick Academy');
			cy.get('.nav-item a[href="about.html"]').click();
		});
	});

	it('web tables', function(){
		cy.visit(Cypress.env('url')+'/AutomationPractice/');
		
		//if there are more than one element of the SAME attr under the same parent,
		//you can call a specific one using the :nth-child(x) selector
		cy.get('#product tbody tr td:nth-child(2)').each((element,index) => {
			const courseTitle = element.text();
			if(courseTitle.includes('Python')) 
			{
				//eq: used when looping and you want to select an item equal to your index: eq(index)
				//next: move to the next item under the same parent that has the SAME ATTR
				cy.get('#product tbody tr td:nth-child(2)').eq(index).next().should('have.text','25');
			}
		});
	});

	it('Mouse Over', function(){
		//cypress has no hover function but JQuerry has
		//we use invoke to call the 'show()' function
		//IMPORTANT call show only on parent of the hidden content
		cy.get('div.mouse-hover-content').invoke('show');
		cy.contains('Top').click();

		//check a part of the url
		cy.url().should('include','top');


		//you can still click on a clickable element even if it's hidden by using the 'force' property
		cy.contains('Reload').click({force: true});
	});
});