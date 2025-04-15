describe('Get all products, fetch a single product by ID', () => {
  it('should retrieve a list of products, then fetch first one by ID', () => {
    // Step 1: Get all products
    cy.api('GET', '/products').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array').and.not.be.empty;

      // Step 2: Store the first product ID as `productId`
      const firstProductData = response.body[0];
      const firstProductId = firstProductData.id;

      // Step 3: Fetch product by ID
      cy.api('GET', `/products/${firstProductId}`).then((singleResponse) => {
        expect(singleResponse.status).to.eq(200);
        expect(singleResponse.body).to.have.property('id', firstProductId);
        expect(singleResponse.body.title).to.eq(firstProductData.title);
        expect(singleResponse.body.price).to.eq(firstProductData.price);
      });
    });
  });
});
