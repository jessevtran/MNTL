describe('Index Page', () => {
  it('See if there are 8 images on the page.', () => {
      cy.visit('https://mntl.herokuapp.com/')
      // Finds all the elements with the img tag.
      cy.get('section').get('img').should('have.length', 8)
  })
})