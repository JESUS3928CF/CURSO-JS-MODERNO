describe('Llena los campos para una nueva cita y la edita', () => {
    it('Campos de la nueva cita', () => {
        //! De esta forma estamos seguras de que el usuario que esta viendo este proyecto va a ver los que teníamos en mente y lo que queríamos mostrar

        cy.visit('/index.html');

        cy.get("[data-cy='mascota']").type('Max'); /// Aca le pones lo que quieres escribir

        cy.get("[data-cy='propietario']").type('Jesús Cochero');

        cy.get("[data-cy='telefono']").type('3235252137');

        cy.get("[data-cy='fecha']").type('2023-05-14');

        cy.get("[data-cy='hora']").type('10:30');

        cy.get("[data-cy='sintomas']").type('No come chocolates.');

        //* Enviar cita
        cy.get("[type='submit']").click();

        //. verificar el texto de citas
        cy.get('[id="administra"]')
            .invoke('text') //* Vamos a seleccionar el texto
            .should('equal', 'Administra tus Citas '); //. Resultado: nos dice que si se encuentra ese texto nuevo

        //. Seleccionar la alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        /// Asegurarse de que tenga la clase correcta
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');

        /// Edita la cita
        //* Haciendo el segundo test aca
        cy.get('[data-cy="editar"]').click();

        cy.get("[data-cy='mascota']")
            .clear() /// Linpia lo que este escrito en el input
            .type('Nuevo Max'); /// Aca le pones lo que quieres escribir

        cy.get("[type='submit']").click();

        //. Seleccionar la alerta para asegurarnos que se mostró
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');

        /// Asegurarse de que tenga la clase correcta
        cy.get('[data-cy="alerta"]').should('have.class', 'alert-success');
    });

    /// Este segundo test me esta presentando error
    // it('Edita la cita', () => {
    //     // cy.get('[data-cy="editar"]').click();
    // });
});
