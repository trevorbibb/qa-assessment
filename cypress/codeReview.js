//This code review exercise was trying to same the same testing scenario as the written assessment.
//For the-internet page, drag one element onto the next and check that it was in the right order 
//Review the following code sample as if you were giving a peer code review. What feedback/suggestions would you give? 


import cy from 'cypress'

describe('Open the page', () => {
    it('opens url', () => {
        cy.visit('http://the-internet.herokuapp.com/drag_and_drop')
    }); 

    it('tests a', () => { 
        cy.get('#column-a').trigger('dragStart', new DataTransfer).cy.get('#column-b').trigger('drop',{DataTransfer})
        cy.get('#columns').children().first().should.be(cy.get('#column-b'))
    }); 
    it('tests b', () => { 
        cy.get('#column-b').trigger('dragStart', new DataTransfer).cy.get('#column-a').trigger('drop',{DataTransfer})
        cy.get('#columns').children().first().should.be(cy.get('#column-a'))
    })
}) 