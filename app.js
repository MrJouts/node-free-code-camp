const estatusPedido = () => {
    return Math.random() < 0.8;
};

for (let index = 0; index < 10; index++) {
    estatusPedido();
}

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (estatusPedido()) {
            resolve("Pedido exitoso! Su pizza está en camino.");
        } else {
            reject("Ocurrió un error. Por favor intente nuevamente.");
        }
    }, 1000);
});

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido, rechazarPedido);

// miPedidoDePizza
//     .then((mensajeDeConfirmacion) => console.log(mensajeDeConfirmacion))
//     .catch((mensajeDeError) => console.log(mensajeDeError));

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const manejarRechazo = (mensajeDeError) => {
    console.log(mensajeDeError);
};


miPedidoDePizza
  .then(manejarPedido)
  .catch(manejarRechazo)