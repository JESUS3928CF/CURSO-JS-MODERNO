
describe('Abrir El proyecto de administración de citas', () => {
    
  /// Primer Prueba
    it('Que se pueda abrir la pagina de administración de citas', () => {
        
      /// Lo que esta asiendo es visitar la siguiente pagina
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/index.html');

        /// Vamos a buscar un selector la sea por id, clase por atributo etc... PARA ESO ES GET
        //* Aca estamos buscando el input que contenga el siguiente place holder
        cy.get("[placeholder='Nombre Mascota']")
          .type('Max'); /// Con type escribimos en ese elemento 

        cy.get("[type='submit']").click(); /// Click el lo que hacemos en ese botón que buscamos
    });
})