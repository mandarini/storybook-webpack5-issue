describe('my-lib-vite: MyLibVite component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mylibvite--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MyLibVite!');
  });
});
