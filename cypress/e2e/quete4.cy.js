describe("Cypress 04 - Plugins", () => {
  it("Upload d'image", () => {
    cy.visit('https://filebin.net');
    cy.get("#fileField").attachFile("fraises-2.jpg");
    cy.contains("It contains 1 uploaded file").should("be.visible");    
  }); 
});
