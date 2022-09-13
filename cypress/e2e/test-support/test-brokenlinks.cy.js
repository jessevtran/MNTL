describe('Testing broken internal links', () => {
  beforeEach(() => {
    cy.visit('https://mntl.herokuapp.com/find-support')
  })

  // array holds the names of each page
  const cardTitle = ['Physical', 'Social',
    'Emotional', 'Academic',
    'Career', 'Spiritual',
    'Environmental'];

  it('navigates through each link', () => {
    // loop through each page and click. Make sure that the path matches
    cardTitle.forEach(page => {
      cy.contains(page + " Wellness").click()
      cy.location('pathname').should('eq', `/find-support/${page.toLowerCase()}`)
      cy.go('back')
    })
  })
})