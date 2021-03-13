describe('Service Locator', function () {

  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.contains('Helsinki Service Locator')
    cy.contains('Search')
  })

  it('does not trigger search when submitted empty string', function () {
    cy.get('#searchButton')
      .click()
    cy.get('#serviceTable').should('not.exist')
  })

  describe('Services', function () {

    beforeEach(function () {
      cy.get('#searchInput')
        .type('Laajasalon VPK')

      cy.get('#searchButton')
        .click()
    })

    it('shows services when requested', function () {
      cy.get('#serviceTable')
        .contains('Laajasalon VPK, palokunnantalo')
    })

    it('should not have next and previous buttons if result count less than 20 ', function () {
      const element = cy.get('#serviceTable')
      element
        .should('not.contain', 'Previous page')
      element
        .should('not.contain', 'Next Page')
    })

    it('should have next button visible if result count over 20', function () {
      cy.get('#searchInput')
        .type('Helsinki')

      cy.get('#searchButton')
        .click()

      cy.get('#serviceTable')
        .should('not.contain', 'Previous page')

      cy.get('#serviceTable')
        .contains('Next page')
    })

    it('should load next page if requested', function () {
      cy.get('#searchInput')
        .type('Helsinki')

      cy.get('#searchButton')
        .click()

      let firstValue

      cy.get('tbody tr td:first').should($input => {
        firstValue = $input.text()
      })

      cy.contains('Next page').click()

      cy.get('#serviceTable')
        .should('not.contain', firstValue)
    })

    it('shows single service view when clicked', function () {
      cy.contains('Laajasalon VPK, palokunnantalo').click()
      cy.contains('Laajasalon VPK:n perinteikäs palokunnantalo sijaitsee idyllisellä tontilla Laajasalon Yliskylässä.')
      cy.contains('Yliskylänkaari 10')
      cy.contains('00840')
    })
  })

})