console.log("Bienvenido a mi tarea...");

var path = window.location.pathname;
var page = path.split("/").pop();

switch (page) {
    case "index.html":
        console.log("Ingresando al index");
        break;
    case "tec1.html":
        console.log("Ingresando a Web Components");
        break;
    case "tec2.html":
        console.log("Ingresando a Deno");
        break;
    case "tec3.html":
        console.log("Ingresando a Flutter");
        break;

    default:
        break;
}