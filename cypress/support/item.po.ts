export class ItemPage {

    getBikesButton(){
        return cy.get('button').contains('Bikes');
    }

    getBooksButton(){
        return cy.get('button').contains('Books');
    }

    getDVDsButton(){
        return cy.get('button').contains('DVDs');
    }

    getFoodButton(){
        return cy.get('button').contains('Food');
    }

    getLaptopsButton(){
        return cy.get('button').contains('Laptops');
    }

    getToysButton(){
        return cy.get('button').contains('Toys');
    }

    //FIXME: potential adding of adding tests for data; columns/rows
}