// This test is for matching the emergency contact numbers with their respective websites.
describe('Crisis page', function(){
    it('should match phone numbers with the websites correctly' , ()=> {
        // array that contains websites.
        const pages = ["https://www.fairfaxcounty.gov/police/fairfax-county-police-department","https://suicidepreventionlifeline.org",
        "https://www.crisistextline.org/","https://www.rainn.org/"]
        
        // visiting the crisis page.
        cy.visit('https://mntl.herokuapp.com/crisis')
        // Matching individual phone numbers with their websites.
        cy.get('a:contains("911")').should('have.attr', 'href').and('equal', pages[0])
        cy.get('a:contains("800-273-8255")').should('have.attr', 'href').and('equal', pages[1])
        cy.get('a:contains("Home to 741-741")').should('have.attr', 'href').and('equal', pages[2])
        cy.get('a:contains("800-656-4673")').should('have.attr', 'href').and('equal', pages[3])
    })
})