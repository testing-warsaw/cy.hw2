/// <reference types="Cypress" />

describe("Api CRUD 10 Test", () => {
	it("Test 1 - GET return 200", () => {
		cy.request("https://httpbin.org").its("status").should("eq", 200);
	});
	it("Test 2 - GET work with response status", () => {
		cy.request("https://httpbin.org").then((response) => {
			const status = response.status;
			const expectedStatus = 200;

			assert.equal(expectedStatus, status);
		});
	});

	it("Test 3 - GET incorrect url", () => {
		const request = {
			url: "https://httpbin.org/non-exist-url",
			failOnStatusCode: false,
		};
		cy.request(request).then((response) => {
			const status = response.status;
			const expectedStatus = 404;

			assert.equal(expectedStatus, status);
		});
	});
	it("Test 4 - GET response data should be correct", () => {
		const request = {
			url: "https://httpbin.org/get",
			qs: {
				"key": "testValue",
			},
			failOnStatusCode: false,
		};
		cy.request(request).then((response) => {
			const status = response.status;
			const expectedStatus = 200;

			const currentArgValue = response.body.args.key;
			const expectedArgsValue = "testValue"
            
            assert.equal(expectedStatus, status);
            assert.equal(expectedArgsValue, currentArgValue)
            cy.log(response.body.args)
		});
	});
});
