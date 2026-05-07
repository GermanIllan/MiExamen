// Recomendado: Declarar variables al inicio para evitar errores de inicialización
const nombre = "German";
let contador = 0;

// Antes (Concatenación tradicional)
console.log("Aupa  " + nombre + ", Bienvenido.");

// Mejorado
console.log(`Hola ${nombre}, Bienvenido.`);

// Tradicional
function saludar(nombre) {
  return `Aupa ${nombre}`;
}

// Arrow Function (Se renombra para evitar conflicto y se añade el parámetro al retorno)
const saludarFlecha = (nombre) => `Aupa ${nombre}`;
