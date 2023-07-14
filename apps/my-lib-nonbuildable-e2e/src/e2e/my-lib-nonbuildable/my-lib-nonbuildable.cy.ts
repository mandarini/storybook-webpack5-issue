describe('my-lib-nonbuildable: MyLibNonbuildable component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mylibnonbuildable--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MyLibNonbuildable!');
  });
});
