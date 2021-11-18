describe('Index Page', () => {
    it('Go to the page when clicking on the respective card', () => {
        // Test link card for Support
        cy.visit('https://mntl.herokuapp.com/')
        cy.contains('Find Support.').click('')
        cy.url()
            .should('include', '/find-support')

        // Test link card for Quiz
        cy.visit('https://mntl.herokuapp.com/')
        cy.contains('Take Our Quiz.').click('')
        cy.url()
            .should('include', '/wellness-quiz')
            
        // Test link card for Crisis
        cy.visit('https://mntl.herokuapp.com/')
        cy.contains('In a CRISIS?').click('')
        cy.url()
            .should('include', '/crisis')

    })
})