var cookiesNom;
var cookieCognom;
var cookieSegonCognom;
var cookieColor;

function enviar(){
    this.cookieNom = document.querySelector("#name").value;
    this.cookieCognom = document.querySelector("#cognom").value;
    this.cookieSegonCognom = document.querySelector("#segoncognom").value;

    document.cookie = "nombreUsuario=" + encodeURIComponent( this.cookieNom ) + ";max-age=3600; path=/";
    document.cookie = "apellidoUsuario=" + encodeURIComponent( this.cookieCognom ) + ";max-age=3600; path=/";
    document.cookie = "segundoApellidoUsuario=" + encodeURIComponent( this.cookieSegonCognom ) + ";max-age=3600; path=/";
    window.location.href = "./index.html"
}

function rosa(){
    this.cookieColor = "#FF69B4";
    document.cookie = "colorFondo=" + encodeURIComponent( this.cookieColor ) + ";max-age=3600; path=/";
}

function naranja(){
    this.cookieColor = "#FF4500";
    document.cookie = "colorFondo=" + encodeURIComponent( this.cookieColor ) + ";max-age=3600; path=/";
}

function amarillo(){
    this.cookieColor = "#FFFF00";
    document.cookie = "colorFondo=" + encodeURIComponent( this.cookieColor ) + ";max-age=3600; path=/";
}

function lila(){
    this.cookieColor = "#FF00FF";
    document.cookie = "colorFondo=" + encodeURIComponent( this.cookieColor ) + ";max-age=3600; path=/";
}