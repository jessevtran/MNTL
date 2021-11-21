// This test is for the headers to be rendered accurately in the crisis page
describe('Crisis header', function(){
    it('should display the headers accuratelly' , ()=> {
        // String array that contains all the headers to be displayed on the screen.
        const headers = ["What To Do During An Emergency Situation?","Suicide Prevention Information",
        "In A Crisis?","National Sexual Assault Hotline"]
        // first must visit the crisis page.
        cy.visit('https://mntl.herokuapp.com/crisis')
        // a loop that goes through the array one by one and checks whether or not the page contains the header.
        headers.forEach(header => {
            cy.contains(header)
        })
    })
})