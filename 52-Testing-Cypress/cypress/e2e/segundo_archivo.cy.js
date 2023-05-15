/// CYPRESS mejor practica para seleccionar elementos

describe('Carga la pagina principal', () => {
    it('Comprobando que exista el h1', () => {

        //. Decirle a donde se va a conectar 
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        /// Se seleccionan los elementos en CSS
        //* Esta es una forma Verificamos el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');


        /// Seleccionando un elemento a traves de un atributo
        cy.get("[data-cy='titulo-proyecto']").should("exist") //* Comprobando que existe el elemento


        //* Verificar que exista el elemento y contenga un texto
        cy.get("[data-cy='titulo-proyecto']")
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        //. verificar el texto de citas
        cy.get('[id="administra"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');

        cy.get('[id="administra"]')
            .invoke('text')
            .should('not.equal', 'No hay Citas, comienza creando una ');
    });
});
