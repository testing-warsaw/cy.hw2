/// <reference types="Cypress" />

describe("Api Cookie ", () => {
	it("Test 1 - Cookie", () => {
		const request = {
			method: "GET",
			url: "https://httpbin.org/headers ",
			headers: {
				"Cookie":"cookieName=CookieValue",
			},
			failOnStatusCode: false,
		};
		cy.request(request).then((response) => {
			const status = response.status;
			const expectedStatus = 200;

            const currentUserAgentValue = response.requestHeaders['Cookie']

			

			assert.equal("cookieName=CookieValue",currentUserAgentValue)
			assert.equal(expectedStatus, status);
            cy.log(response.requestHeaders)
			
		});
	});
});
