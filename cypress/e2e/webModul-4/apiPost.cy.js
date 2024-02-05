/// <reference types="Cypress" />


describe('Api Post test', () => {

    it('Test 1 - POST status code 200', () => {
       
       const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    }
    cy.request(request).then(response => {

        const status = response.status
        const expectedStatus = 200

        assert.equal(expectedStatus, status)
    })
})

it('Test 2 - POST wrong method GET (Method Not Allowed)', () => {
       
    const request = {
     method: 'POST',
     url: 'https://httpbin.org/get',
     failOnStatusCode: false
 }
 cy.request(request).then(response => {

     const status = response.status
     const expectedStatus = 405

     assert.equal(expectedStatus, status)
 })
})

it('Test 3 - POST with body', () => {

    const bodyRequest = {
        userName: "testName"
    }
       
    const request = {
     method: 'POST',
     url: 'https://httpbin.org/post',
     body: bodyRequest,
     failOnStatusCode: false
 }
 cy.request(request).then(response => {

     const status = response.status
     const expectedStatus = 200

     const responseData = JSON.parse(response.body.data)

     assert.equal(bodyRequest.userName, responseData.userName)
     assert.notStrictEqual(bodyRequest, response.body.data )
     assert.equal(expectedStatus, status)
 })
})




})