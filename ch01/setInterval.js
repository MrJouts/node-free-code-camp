function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

setInterval(mostrarTema, 500, "Node.js");

function sumar(a, b) {
    console.log(a + b);
}

setInterval(sumar, 600, 3, 4);
