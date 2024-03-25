function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}

mostrarTema("Node.js");

setTimeout(mostrarTema, 1000, "Node.js");

function sumar(a, b) {
    console.log(a + b);
}

setTimeout(sumar, 1500, 5, 6);
