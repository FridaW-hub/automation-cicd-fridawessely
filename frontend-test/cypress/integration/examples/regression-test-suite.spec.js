/// <reference types="cypress" />

//This is a test suite
describe('Regression test suite', function(){

    //This is a test case Login and Logout
    it('Perform valid login and logout', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
        cy.title().should('include', 'Testers Hotel')
    })

    //This is a test case Login incorrect
    it('Perform unvalid login', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester1')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Bad username or password')
    })

    //This is a test case View Rooms
    it('View Rooms', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        //Login
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        //View rooms
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        //Logout
        cy.get('.user > .btn').click()
        cy.contains('Login')
        cy.title().should('include', 'Testers Hotel')
    })

    //This is a test case View Rooms
    it('Create, Edit and Delete Room', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        //Login
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        //View rooms
        cy.get(':nth-child(1) > .btn').click()
        cy.contains('Rooms')
        //Create room
        cy.get('h2 > .btn').click()
        cy.contains('New Room')
        cy.get(':nth-child(1) > select').select('double')
        cy.get(':nth-child(2) > input').type('701')
        cy.get(':nth-child(3) > input').type('7')
        cy.get('.checkbox').click()
        cy.get(':nth-child(5) > input').type('400')
        cy.get(':nth-child(6) > select').select('sea_view')
        cy.get('.blue').click()
        cy.contains('Rooms')
        //Assert details for room
        cy.get(':last-child > :nth-child(2) > h3').should('contain','Floor 7, Room 701')
        cy.get(':last-child > .icon').should('contain','701')
        cy.get(':last-child > :nth-child(2) > .category').should('contain', 'Category: double')
        cy.get(':last-child > :nth-child(2) > .available').should('contain', 'Available: true')
        cy.get(':last-child > :nth-child(2) > .price').should('contain', 'Price: 400kr')
        cy.get(':last-child > :nth-child(2) > .features > .feature').should('contain', 'sea view')
        //Edit room
        cy.get(':last-child > .action > img').click()
        cy.get('.menu > :nth-child(1)').click()
        cy.get(':nth-child(4) > input').clear()
        cy.get(':nth-child(4) > input').type('702')
        cy.get(':nth-child(8) > select').select('balcony')
        cy.get('.blue').click()
        cy.contains('Rooms')
        //Assert edited room
        cy.get(':last-child > :nth-child(2) > h3').should('contain','Floor 7, Room 702')
        cy.get(':last-child > .icon').should('contain','702')
        cy.get(':last-child > :nth-child(2) > .category').should('contain', 'Category: double')
        cy.get(':last-child > :nth-child(2) > .available').should('contain', 'Available: true')
        cy.get(':last-child > :nth-child(2) > .price').should('contain', 'Price: 400kr')
        cy.get(':last-child > :nth-child(2) > .features > .feature').should('contain', 'balcony')
        //Delete room
        cy.get(':last-child > .action > img').click()
        cy.get('.menu > :nth-child(2)').click()
        cy.contains('Rooms')
        //Assert deleted room

        //Go out from rooms
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')


        //Logout
        cy.get('.user > .btn').click()
        cy.contains('Login')
        cy.title().should('include', 'Testers Hotel')
        })

        //This is a test case View Client
    
        it('View Client', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        //Login
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        //View client
        cy.get('.blocks > :nth-child(2) > .btn').click()
        cy.contains('Clients')
        cy.get(':nth-child(3) > .btn').click()
        cy.contains('Welcome tester01!')
        cy.contains('Tester Hotel Overview')
        //Logout
        cy.get('.user > .btn').click()
        cy.contains('Login')
        cy.title().should('include', 'Testers Hotel')
    })

})