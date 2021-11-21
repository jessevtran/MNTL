// Test to check the accuracy of contact numbers given on the page.
describe('Crisis numbers', function(){
    it('should display the contact numbers accuratelly' , ()=> {
        
        // array that contains the accurate contact numbers.
        const contactNumbers = ["911","800-273-8255","Home to 741-741","800-656-4673"]
        // visits the crisis page.
        cy.visit('https://mntl.herokuapp.com/crisis')
        // loop that goes through each element of the array and checks whether they are displayed accurately.
        contactNumbers.forEach(numbers => {
            cy.contains(numbers)
        })
    })
})