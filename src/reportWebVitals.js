// Esta función se utiliza para medir el rendimiento de la aplicación (Web Vitals).
// El parámetro `onPerfEntry` es una función que será llamada con los datos de rendimiento.

// Verificamos si `onPerfEntry` es una función válida.
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Aquí estamos utilizando el patrón de "Dynamic Import".
    // En lugar de importar el paquete `web-vitals` al inicio de la aplicación,
    // lo cargamos dinámicamente SOLO si `onPerfEntry` es una función válida.
    // Esto ayuda a reducir el tamaño inicial del bundle (mejora el tiempo de carga inicial).
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llamamos a las funciones del paquete `web-vitals` para recopilar métricas de rendimiento.
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exportamos la función para que pueda ser utilizada en otras partes de la aplicación.
export default reportWebVitals;
