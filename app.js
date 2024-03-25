const fs = require("fs");

// Leer un archivo.

console.log("Antes de leer el archivo...");

const archivo = fs.readFileSync("./index.html", "utf-8");

console.log(archivo);

console.log("Después de leer el archivo...");

// Cambiar el nombre de un archivo.
fs.renameSync("./index.html", "./main.html");

console.log("Después de cambiar el nombre del archivo...");

// Agregar contenido al final de un archivo.
fs.appendFileSync("./index.html", "<p>Hola</p>", (err) => {
    if (err) {
        throw err;
    }

    console.log("Archivo actualizado.");
});

console.log("Después de agregar contenido al archivo...");

// Reemplazar todo el contenido el archivo.
fs.writeFileSync("./index.html", "Contenido Nuevo", (err) => {
    if (err) {
        throw err;
    }

    console.log("Contenido reemplazado exitosamente");
});

console.log("Después de reemplazar todo el contenido al archivo...");

// Eliminar archivos
fs.unlinkSync("./main.html", (err) => {
    if (err) {
        throw err;
    }

    console.log("Archivo eliminado.");
});

console.log("Después de eliminar el archivo...");
