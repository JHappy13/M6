var cookieNom = document.cookie.split(";")[1].split("=")[1];
var cookieCognom = document.cookie.split(";")[2].split("=")[1];
var cookieSegonCognom = document.cookie.split(";")[3].split("=")[1];
var cookieColorFondo = document.cookie.split(";")[0].split("=")[1];

console.log(document.cookie);
console.log(this.cookieColorFondo);
function login(){
    window.location.href = "./login.html";
}

function cerrarSession(){
    document.cookie = "nombreUsuario=; expires=0; path=/";
    document.cookie = "apellidoUsuario=; expires=0; path=/"; 
    document.cookie = "segundoApellidoUsuario=; expires=0; path=/";
    document.cookie = "colorFondo=; expires=0; path=/";
    window.location.reload();
}

document.write("<h1>Exercici 1 de cookies</h1>");
document.write("<p>Nom:  "+ cookieNom +"</p>");
document.write("<p>Cognom:  "+ cookieCognom + " "+ cookieSegonCognom  +"</p>");

