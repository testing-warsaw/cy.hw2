/// <reference types="Cypress" />

describe("Check Duration ", () => {
	it("Test 7 - Check request duration ", () => {
		const request = {
			method: "GET",
			url: "https://httpbin.org/get ",
			failOnStatusCode: false,
		};
		cy.request(request).then((response) => {
			
			assert.isTrue(response.duration <= 2000)
            cy.log(response.duration)

			
		});
	});
	it('should check the request duration', () => {
		cy.request('GET', 'https://httpbin.org/delay/2')
		  .its('duration')
		  .should('be.greaterThan', 1000);
	  });
});
