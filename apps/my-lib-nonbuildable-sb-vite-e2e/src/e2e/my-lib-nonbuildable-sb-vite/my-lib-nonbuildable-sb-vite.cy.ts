describe('my-lib-nonbuildable-sb-vite: MyLibNonbuildableSbVite component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=mylibnonbuildablesbvite--primary')
  );

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MyLibNonbuildableSbVite!');
  });
});
