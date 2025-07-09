// karma.conf.js
module.exports = function (config) {
  config.set({
    // ...otras configuraciones
    browsers: ["ChromeHeadless"], // Usar ChromeHeadless

    // Configuración para el lanzador de Chrome Headless
    customLaunchers: {
      ChromeHeadless: {
        base: "Chrome",
        flags: [
          "--headless",
          "--disable-gpu",
          // Requerido para ejecutarse como root dentro de un contenedor Docker
          "--no-sandbox",
          "--remote-debugging-port=9222",
        ],
      },
    },

    singleRun: true, // Importante para que Karma termine después de los tests en CI
  });
};
