/// Métodos para strings en JEST

const password = "123456";

describe('Valida que el password no este vacío y tenga una extensión de 6 caracteres', () => {
    test('Que el password tenga 6 caracteres', () => {
        // expect( password ).toBe(); /// toBe lo que hace es verificar que el valor password sea igual a lo que esta en toBe

        expect(password).toHaveLength(6); /// para comprobar cuantos caracteres comprobar que tenga
    })
    

    test("Password no vacío", () => {
        expect(password).not.toHaveLength(0); /// Para negar no necesita paréntesis
    });
});