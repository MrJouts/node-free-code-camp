const http = require("http");
const { infoCursos } = require("./cursos");

const servidor = http.createServer((req, res) => {
    const metodo = req.method;

    console.log(req.headers);

    switch (metodo) {
        case "GET":
            return manejarSolicitudGET(req, res);
        case "POST":
            return manejarSolicitudPOST(req, res);
        case "PUT":
            return manejarSolicitudPUT(req, res);
        case "DELETE":
            return manejarSolicitudDELETE(req, res);
        default:
            res.statusCode = 501;
            res.end(
                `El método no puede ser manejado por el servidor: ${metodo}`
            );
    }
});

function manejarSolicitudGET(req, res) {
    const path = req.url;

    console.log(res.statusCode); // 200 OK

    if (path === "/") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end("Bienvenidos a mi primer servidor y API creados con Node.js");
    } else if (path === "/cursos") {
        res.end(JSON.stringify(infoCursos));
    } else if (path === "/cursos/programacion") {
        res.end(JSON.stringify(infoCursos.programacion));
    } else {
        res.statusCode = 404;
        res.end("El recurso solicitado no existe...");
    }
}

function manejarSolicitudPOST(req, res) {
    const path = req.url;

    if (path === "/cursos/programacion") {
        let cuerpo = "";

        req.on("data", (contenido) => {
            cuerpo += contenido.toString();
        });

        req.on("end", () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo);

            console.log(typeof cuerpo);

            console.log(cuerpo.titulo);

            res.end(
                "El servidor recibió una solicitud POST para /cursos/programacion"
            );
        });

        // res.end(
        //     "El servidor recibió una solicitud POST para /cursos/programacion"
        // );
    }
}

function manejarSolicitudPUT(req, res) {
    const path = req.url;

    if (path === "/cursos/programacion/1") {
        res.end(
            "El servidor recibió una solicitud PUT para /cursos/programacion/1"
        );
    }
}

function manejarSolicitudDELETE(req, res) {
    const path = req.url;

    if (path === "/cursos/programacion/1") {
        res.end(
            "El servidor recibió una solicitud DELETE para /cursos/programacion/1"
        );
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`);
});
