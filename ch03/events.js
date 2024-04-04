const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

// Versión 1
emisorProductos.on("compra", () => {
    console.log(`Se realizó una compra.`);
});

// Versión 2
emisorProductos.on("compra", (total) => {
    console.log(`Se realizó una compra por $${total}.`);
});

// Versión 3
emisorProductos.on("compra", (total, numProductos) => {
    console.log(`Total de la compra: $${total}.`);
    console.log(`Número de productos: ${numProductos}.`);
});

emisorProductos.emit("compra");
emisorProductos.emit("compra", 500);
emisorProductos.emit("compra", 500, 5);
