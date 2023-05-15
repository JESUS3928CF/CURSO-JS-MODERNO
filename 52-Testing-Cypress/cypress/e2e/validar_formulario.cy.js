describe("Valida el formulario", () =>  {
    it("Submit al formulario y mostrar la alerta de error", () => {
        //. Decirle a donde se va a conectar
        cy.visit('/index.html');

        //. seleccionar el formulario o el bottom submit
        cy.get("[data-cy='formulario']")
            .submit();

        //. seleccionar la alerta
        cy.get("[data-cy='alerta']")//* verificando el texto de la alerta 
            .invoke("text")
            .should("equal", "Todos los campos son Obligatorios")

        /// Asegurarse que tiene la clase correcta
        cy.get("[data-cy='alerta']") //* verificando el texto de la alerta
            .should('have.class', 'alert-danger');//. have.class es para verificar una clase del elemento

    });
});     