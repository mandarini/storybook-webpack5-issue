describe('my-lib-rollup-with-sb-vite: MyLibRollupWithSbVite component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mylibrollupwithsbvite--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MyLibRollupWithSbVite!');
  });
});
