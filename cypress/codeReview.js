//Review the following code sample as if you were giving a peer code review. What feedback/suggestions would you give? 


/*** Potential feedback
 * Nondescriptive describe and test statements (future ease of troubleshooting and reporting value)
 * Not using variables for elements (code re-usability) 
 * Long chaining together actions and assertions instead of breaking into new lines or refactoring (code readibility) 
 * Refactor dragging into own function instead of copy paste (code reusability)
 * Copy-paste error in test b would cause it to fail (cy.get('#column-b')) should be column-a (functional issue)
 * Bad commit message and no good detail in pull request body (documentation)
 * Not defining car for new Datatransfer object 
 * 
 */ 


 import cy from 'cypress'

 describe('Open the page', () => {
     it('opens url', () => {
         cy.visit('http://the-internet.herokuapp.com/drag_and_drop')
     it('opens url', () => { //not descriptive for setup 
         cy.visit('http://the-internet.herokuapp.com/drag_and_drop')  
     }); 
 
     it('tests a', () => { 
         cy.get('#column-a').trigger('dragStart', new DataTransfer).cy.get('#column-b').trigger('drop',{DataTransfer})
         cy.get('#column-a').trigger('dragStart').cy.get('#column-b').trigger('drop')
         cy.get('#columns').children().first().should.be(cy.get('#column-b'))
     }); 
     it('tests b', () => { 
         cy.get('#column-b').trigger('dragStart', new DataTransfer).cy.get('#column-a').trigger('drop',{DataTransfer})
         cy.get('#columns').children().first().should.be(cy.get('#column-a'))
         cy.get('#column-b').trigger('dragStart').cy.get('#column-a').trigger('drop')
         cy.get('#columns').children().first().should.be(cy.get('#column-b'))
     })
 })  
 }) 