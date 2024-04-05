const http = require("http");
const cursos = require("./cursos");

const servidor = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            return manejarSolicitudGET(req, res);
        case "POST":
            return manejarSolicitudPOST(req, res);
        case "PUT":
            return manejarSolicitudPUT(req, res);
        case "DELETE":
            return manejarSolicitudDELETE(req, res);
        default:
            console.log(
                `El método no puede ser manejado por el servidor: ${method}`
            );
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;

    if (path === "/") {
        res.statusCode = 200;
        res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
    } else if (path === "/cursos") {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === "/cursos/programacion") {
        res.statusCode === 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else {
        res.statusCode = 404;
        res.end("El recurso solicitado no existe...");
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === "/cursos/programacion") {
        res.statusCode = 200;
        res.end(
            "El servidor recibió una solicitud POST para /cursos/programacion"
        );
    }
}

function manejarSolicitudPUT(req, res) {
    const path = req.url;

    if (path === "/cursos/programacion/1") {
        res.statusCode = 200;
        res.end(
            "El servidor recibió una solicitud PUT para /cursos/programacion/1"
        );
    }
}

function manejarSolicitudDELETE(req, res) {
    const path = req.url;

    if (path === "/cursos/programacion/1") {
        res.statusCode = 200;
        res.end(
            "El servidor recibió una solicitud DELETE para /cursos/programacion/1"
        );
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});
