describe('Service Locator', function() {

  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Helsinki Service Locator')
    cy.contains('Search')
  })

  it('does not trigger search when submitted empty string', function() {
    cy.get('#searchButton')
      .click()
    cy.get('#serviceTable').should('not.exist')
  })

  describe('Services', function() {

    beforeEach(function() {
      cy.get('#searchInput')
        .type('Laajasalon VPK')

      cy.get('#searchButton')
        .click()
    })

    it('shows services when requested', function() {
      cy.get('#serviceTable')
        .contains('Laajasalon VPK, palokunnantalo')
    })

    it('shows single service view when clicked', function() {
      cy.contains('Laajasalon VPK, palokunnantalo').click()
      cy.contains('Laajasalon VPK:n perinteikäs palokunnantalo sijaitsee idyllisellä tontilla Laajasalon Yliskylässä.')
      cy.contains('Yliskylänkaari 10')
      cy.contains('00840')
    })
  })

})