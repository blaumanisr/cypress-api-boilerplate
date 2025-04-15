describe('Authenticated API Requests', () => {
  before(() => {
    cy.api('POST', '/auth/login', {
      username: 'mor_2314',
      password: '83r5^_',
    }).then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('authToken', response.body.token); // Save token as env variable
    });
  });

  it('should fetch user cart using the token', () => {
    cy.api({
      method: 'GET',
      url: '/carts/user/1',
      headers: {
        Authorization: `Bearer ${Cypress.env('authToken')}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
    });
  });

  it('wrong username/password should return status 403', () => {
    cy.api({
      method: 'POST',
      url: '/auth/login',
      body: {
        username: 'wrong_username',
        password: 'wrong_password',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});
