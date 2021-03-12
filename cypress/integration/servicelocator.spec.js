describe('Service Locator', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Helsinki Service Locator')
    cy.contains('Search')
  })

  it('shows services when requested', function() {
    cy.get('#searchInput')
      .type('Laajasalon VPK')

    cy.get('#searchButton')
      .click()

    cy.get('#serviceTable')
      .contains('Laajasalon VPK, palokunnantalo')
  })

  it('does not trigger search when submitted empty string', function() {
    cy.get('#searchButton')
      .click()
    cy.get('#serviceTable').should('not.exist')
  })

})