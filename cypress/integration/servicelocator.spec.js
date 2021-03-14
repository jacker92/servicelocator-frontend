const PREVIOUS_PAGE = '‹'
const NEXT_PAGE = '›'

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

  describe('Service table', function () {
    it('should have next button visible if result count over 20', function () {
      cy.get('#searchInput')
        .type('Helsinki')

      cy.get('#searchButton')
        .click()

      cy.get('#serviceTable')
        .should('not.contain', PREVIOUS_PAGE)

      cy.get('#serviceTable')
        .contains(NEXT_PAGE)
    })
  })

  describe('Pagination', function () {

    beforeEach(() => {
      cy.get('#searchInput')
        .type('Helsinki')

      cy.get('#searchButton')
        .click()

    })
    it('should load next page if requested', function () {

      let firstValue

      cy.get('tbody tr td:first').should($input => {
        firstValue = $input.text()
      })

      cy.contains(NEXT_PAGE).click()

      cy.get('#serviceTable')
        .should('not.contain', firstValue)
    })

    describe('Advanced pagination', function () {
      beforeEach(() => {
        containsPaginationLinkWithValue(1)
        doesNotContainPaginationLinkWithValue(2)

        cy.contains(NEXT_PAGE).click()

        containsPaginationLinkWithValue(2)

        cy.contains(NEXT_PAGE).click()

        containsPaginationLinkWithValue(3)

        cy.get('#paginationLinks ul li a')
          .contains(1)

        doesNotContainPaginationLinkWithValue(2)

        cy.get('*[class^="page-item active"]')
          .contains(3)
      })
      it('should show pagination correctly', function () {
        cy.contains(PREVIOUS_PAGE).click()

        containsPaginationLinkWithValue(2)

        cy.get('#paginationLinks ul li a')
          .contains(1)

        doesNotContainPaginationLinkWithValue(3)
      })

      it('should reset active page after search', function () {
        cy.get('#searchInput')
          .type('Helsinki')

        cy.get('#searchButton')
          .click()

        cy.get('*[class^="page-item active"]')
          .contains(1)
      })

      it('after visiting single service view, should return to same state that was previously', function () {
        cy.get('tbody tr td a:first').click()

        cy.get('#gobackbutton').click()

        containsPaginationLinkWithValue(3)

        cy.get('#paginationLinks ul li a')
          .contains(1)

        doesNotContainPaginationLinkWithValue(2)
      })
    })
  })
  describe('Service assertions', function () {

    beforeEach(function () {
      cy.get('#searchInput')
        .type('Laajasalon VPK')

      cy.get('#searchButton')
        .click()
    })

    it('shows single service view when clicked', function () {
      cy.contains('Laajasalon VPK, palokunnantalo').click()
      cy.contains('Laajasalon VPK:n perinteikäs palokunnantalo sijaitsee idyllisellä tontilla Laajasalon Yliskylässä.')
      cy.contains('Yliskylänkaari 10')
      cy.contains('00840')
    })

    it('shows services when requested', function () {
      cy.get('#serviceTable')
        .contains('Laajasalon VPK, palokunnantalo')
    })

    it('should not have next and previous buttons if result count less than 20 ', function () {
      cy.get('#serviceTable')
        .should('not.contain', PREVIOUS_PAGE)
        .should('not.contain', NEXT_PAGE)
    })
    it('should sort items correcly', function () {
      cy.contains('Name').click()
      cy.get('#serviceTable')
        .contains('Laajasalon VPK, palokunnantalo')
    })
  })

  const containsPaginationLinkWithValue = (value) => {
    cy.get('#paginationLinks ul li span')
      .contains(value)
  }

  const doesNotContainPaginationLinkWithValue = (value) => {
    cy.get('#paginationLinks ul li span')
      .should('not.contain', value)
  }

})