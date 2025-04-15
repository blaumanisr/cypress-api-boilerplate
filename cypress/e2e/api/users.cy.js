describe('/users', () => {
  it('calls the GET /users & check response body', () => {
    cy.api('GET', '/users').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('calls GET /users 10 times using Cypress._.times & check response duration', () => {
    Cypress._.times(10, () => {
      cy.api('GET', '/users').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.duration).to.be.lessThan(500);
      });
    });
  });

  it('should create a new user with fixture payload', () => {
    cy.fixture('newUser').then((user) => {
      cy.api('POST', '/users', user).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('id');
      });
    });
  });
});
