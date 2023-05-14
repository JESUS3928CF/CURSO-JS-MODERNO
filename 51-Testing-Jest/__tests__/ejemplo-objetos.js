const cliente = {
    nombre: 'Jesús Cochero',
    balance: 500
}

describe("Testing al cliente", () => {
    test('El cliente es premium', () => {
        //* Ejemplo de premium si es mayor a 400 es premium si falla no lo es
        expect(cliente.balance).toBeGreaterThan(400); /// Método ser mayor a;
    });

    test("Es Jesús Cochero", () => {
        expect(cliente.nombre).toBe('Jesús Cochero'); /// Método Igual a
    });
    

    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Juan'); /// Método no es Igual a
    });

    test('No tiene 400', () => {
        expect(cliente.balance).not.toBe(400); 
    });
});