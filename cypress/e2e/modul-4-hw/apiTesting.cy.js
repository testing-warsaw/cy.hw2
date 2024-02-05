/// <reference types="Cypress" />

describe("Modul 4 Api testing ", () => {

	it('Test 1 - make a success GET request', () => {
        cy.request('GET', 'https://httpbin.org/get')
          .its('status')
          .should('eq', 200);
      });

      it('Test 2 - make a success POST request ', () => {
        cy.request({
          method: 'POST',
          url: 'https://httpbin.org/post',
          body: {
            key: 'value',
          },
        }).then(response => {
          expect(response.status).to.eq(200);
          expect(response.body.json.key).to.eq('value');
        });
      });

      it('Test 3 - check response headers', () => {
        cy.request('GET', 'https://httpbin.org/headers').then(response => {
          
          expect(response.headers['content-type']).to.include('application/json');
        });
      });
      it('Test 4 - check the request duration', () => {
		cy.request('GET', 'https://httpbin.org/delay/1')
		  .its('duration')
		  .should('be.greaterThan', 1000);
	  });

      it('Test 5 - send query parameters in the request', () => {
        const paramName = 'param1';
        const paramValue = Math.random().toString(36).substring(7);
    
        cy.request('GET', `https://httpbin.org/get?${paramName}=${paramValue}`)
          .its('status')
          .should('eq', 200);
      });

      it('Test 6 - POST request with random query param', () => {
        const randomParam = Math.random().toString(36).substring(7);
    
        cy.request({
          method: 'POST',
          url: 'https://httpbin.org/post',
          body: {
            randomParam: randomParam,
          },
        }).then(response => {
          expect(response.status).to.eq(200);
          expect(response.body.json.randomParam).to.eq(randomParam);
        });
      });

      it('Test 7 - Get API Test', ()=>{
        cy.request('GET', 'https://httpbin.org/get').then((response) =>{
            expect(response.body).to.have.property('url','https://httpbin.org/get')
        })
    })

      it('Test 8 - Post API test', ()=>{
        cy.request({
            method: "POST",
            url: 'https://httpbin.org/post',
            headers: {
                'content-type': 'application/json',
            },
            body: {
                "name":"JamesBond",
            }
        }).then((response) =>{
            expect(response.body).to.have.property('json');
            expect(response.body.json).to.deep.equal({'name':'JamesBond'})
        });
    });

      it('Test 9 - Put API Test', ()=>{
        cy.request('PUT','https://httpbin.org/put', {'name':'Bond'}).then((response) =>{
            expect(response.body).to.have.property('json');
            expect(response.body.json).to.deep.equal({'name':'Bond'});
        });
    });


      it('Test 10 - Patch API Test',()=>{
        cy.request('PATCH', 'https://httpbin.org/patch', {'name':'James'}).then((response) =>{
            expect(response.body).to.have.property('json');
            expect(response.body.json).to.deep.equal({'name':'James'})
        });
    });

      it('Test 11 - Delete API Test',()=>{
        cy.request('DELETE', 'https://httpbin.org/delete').then((response) => {
            expect(response.body).to.have.property('url','https://httpbin.org/delete')
        });
    });






});

