
describe('Test av Shopizer', function() {
    this.beforeAll('Open shopizer', function(){
        cy.visit('http://localhost:8080/shop/');
        cy.viewport(1200,900)
    });
 
    it ('As a customer, I want to Buy a product without Login', function() {
        cy.get('a').contains("Handbags").click({ force: true });
        //expect("Bags")
        cy.contains("Add to cart").click({ force: true });
        cy.contains("Checkout").click({ force: true });
        cy.get('a').contains("Proceed to checkout").click({ force: true });
        //cy.get('[class="wc-proceed-to-checkout]"').click()
        cy.get('[id="customer.firstName"]').type('Team').should('have.value', 'Team').and('have.class','required')
        cy.get('[id="customer.lastName"]').type('Yellow').should('have.value', 'Yellow').and('have.class','required');
        expect("Yellow");
        cy.wait(1000)
        cy.get('[id="customer.billing.company"]').type('Team Yellow-ITHS');
        cy.get('[id="customer.billing.address"]').type('Queenlandsgatan 57');
        expect("Queenlandsgatan");
        cy.wait(1000)
        cy.get('[id="customer.billing.city"]').type('Queensland');
        
        cy.get('[id="customer.billing.country"]').select('Australia').should('have.value', 'AU').and('have.class','billing-country-list');
        cy.expect("Australia")
        cy.get('[id="billingStateList"]').select('Queensland').should('have.value', 'QLD').and('have.class','zone-list required')
        cy.wait(2000)
        cy.get('[id="billingPostalCode"]').type('652711');
        cy.get('[id="customer.emailAddress"]').type('teamyellow@gmail.com').should('have.class','required');
        cy.wait(1000)
        cy.get('[id="customer.billing.phone"]').type('0713861381').should('have.class','required');
        cy.wait(2000)
       
        cy.get('[id="submitOrder"]').click();
        cy.expect("submitOrder");
        cy.log("Test Completed...")
         //cy.contains('Team Yellow');
    }); 

    
});
 