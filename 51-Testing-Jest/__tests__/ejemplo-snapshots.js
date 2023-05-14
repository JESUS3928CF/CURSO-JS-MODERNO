/// Los snapshots son datos que se almacenan en uin string se crean en una carpeta aparte y sobre ella podemos comparar todo el objeto

const cliente = {
    nombre: 'Jesús 2',
    balance: 600,
    tipo: "Premium"
};


describe("Testing al cliente", () => {
    test('Es Jesús Cochero', () => {
        //. Si lo ejecutamos esto crear una carpeta de snapshots
        //* Ese archivo lo administra JEST osea tu no
        expect(cliente).toMatchSnapshot('Jesús Cochero'); /// Método Igual a
    });
});