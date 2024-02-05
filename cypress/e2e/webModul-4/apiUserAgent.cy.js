/// <reference types="Cypress" />

describe("Api user Agent ", () => {
	it("Test 1 - user agent", () => {
		const request = {
			method: "GET",
			url: "https://httpbin.org/headers ",
			headers: {
				"User-Agent":"testAgent-JamesBond-007",
			},
			failOnStatusCode: false,
		};
		cy.request(request).then((response) => {
			const status = response.status;
			const expectedStatus = 200;

            const currentUserAgentValue = response.requestHeaders['User-Agent']

			

			assert.equal("testAgent-JamesBond-007",currentUserAgentValue)
			assert.equal(expectedStatus, status);
            cy.log(response.requestHeaders)
			
		});
	});
});
