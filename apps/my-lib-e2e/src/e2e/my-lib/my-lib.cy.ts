describe('my-lib: MyLib component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mylib--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to MyLib!');
  });
});
