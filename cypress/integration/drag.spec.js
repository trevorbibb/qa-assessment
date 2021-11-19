import Selectors from './../selectors'


describe('Open the-internet', () => {
    it('Visits The-internet page', () => {
        cy.visit('http://the-internet.herokuapp.com/drag_and_drop')
    })

    it('Drags column A onto column b', () => {
        dragAndDrop(Selectors.columnA,Selectors.columnB)
    })
    it('Expects Column B to be to the left of column A', () => { //Example assertion 
        cy.get(Selectors.columnParent).children().first()
    })

})  

function dragAndDrop(dragElement, targetElement){ 
const dataTransfer = new DataTransfer 

    cy.get(dragElement)
    .trigger('dragStart', {dataTransfer}) //Grab the selected element 

    cy.get(targetElement)
    .trigger('drop', {dataTransfer})  //Drop the element to the target 
}

