/// <reference types="Cypress" />


describe('Api headers', () => {

it('Test 1 - response and headers should be correct', () => {

   
       
    const request = {
     method: 'GET',
     url: 'https://httpbin.org/headers ',
     headers: {
        "customHeader": "testValue"
     },
     failOnStatusCode: false
 }
 cy.request(request).then(response => {

     const status = response.status
     const expectedStatus = 200

     const currentHeadersValue = response.requestHeaders.customHeader

     

    
     assert.equal(currentHeadersValue, "testValue" )
     assert.equal(expectedStatus, status)
     cy.log(response.requestHeaders)
     cy.log(JSON.stringify(response.requestHeaders))
 })
})




})