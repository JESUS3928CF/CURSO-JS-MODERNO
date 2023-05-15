const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            /// Esta configuración es para no tener que escribir la ruta completa de la página
            this.baseUrl = 'http://127.0.0.1:5500/52-Testing-Cypress';

            /// Mejorar la calidad de los videos
            this.videoCompression = 0; //* el rango es de 0 a 51 0 siendo la mejor calidad
        },
    },
});
