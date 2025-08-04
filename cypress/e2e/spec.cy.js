
describe('Login Component E2E Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('renders login form', () => {
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[name="terms"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.disabled');
  });

  it('shows error for invalid email', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('Abcd123!@');
    cy.get('input[name="terms"]').check();
    cy.get('p').contains('Lütfen geçerli bir e-posta adresi girin.').should('be.visible');
  });
    it('shows error for invalid password', () => {
    cy.get('input[name="email"]').type('test@alan.com');
    cy.get('input[name="password"]').type('invalid-password');
    cy.get('input[name="terms"]').check();
    cy.get('p').contains('Şifre en az 8 karakter, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.').should('be.visible');
  });
      it('shows error for invalid password and email', () => {
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('invalid-password');
    cy.get('input[name="terms"]').check();
    cy.get('p').contains('Şifre en az 8 karakter, bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter içermelidir.').should('be.visible');
    cy.get('p').contains('Lütfen geçerli bir e-posta adresi girin.').should('be.visible');
  });
it('disables submit button when form is invalid', () => {
    cy.get('input[name="email"]').type('test@alan.com');
    cy.get('input[name="password"]').type('Abcd123!@');
    cy.get('input[name="terms"]').uncheck();
    cy.get('button[type="submit"]').should('be.disabled');
  });
  it('enables submit button when form is valid', () => {
    cy.get('input[name="email"]').type('test@alan.com');
    cy.get('input[name="password"]').type('Abcd123!@');
    cy.get('input[name="terms"]').check();
    cy.get('button[type="submit"]').should('not.be.disabled');
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Form başarıyla gönderildi!');
 
  })})
})