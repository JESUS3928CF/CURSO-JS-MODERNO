import Citas from "../js/classes/Citas.js";

describe("Probar la clase de citas", () => {

    //- La instanciamos para utilizarla en las pruebas 
    const citas = new Citas();

    /// declarando el id de forma global
    const id = Date.now();

    test('Agregar una nueva cita', () => { 
        const citaObj = {
            mascota: 'Hook',
            propietario: 'Jesús',
            telefono: '323333',
            fecha: '10-12-2020',
            hora: '10:30',
            sintomas: 'Solo duerme',
        };

        citaObj.id = id;

        //- Aca el método que vamos a probar

        citas.agregarCita(citaObj);

        //- Prueba
        expect(citas).toMatchSnapshot();
     })


     /// Segunda Prueba 
     test("Actualizar Cita", () => {
        //* Aca estamos actualizando esta cita
        const citaActualizada = {
            id, 
            mascota: 'Nuevo Nombre',
            propietario: 'Jesús',
            telefono: '323333',
            fecha: '10-12-2020',
            hora: '10:30',
            sintomas: 'Solo duerme',
        };

        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
     });

     /// Test de eliminar
     test("Eliminar cita", () => {
        citas.eliminarCita(id);

        //! Lo que esperamos 
        expect(citas).toMatchSnapshot();

     })
});