function setDateTime() {
    const date = new Date();
    var cookieNom = document.cookie.split(";")[1].split("=")[1];
    // Decodifica la cadena
    var fechaDecodificada = decodeURIComponent(cookieNom);
    
    // Formatea la fecha en el estilo deseado (dd/mm/yyyy hh:mm:ss)
    var partesFechaHora = fechaDecodificada.split(" ");
    var partesFecha = partesFechaHora[0].split("/");
    var partesHora = partesFechaHora[1].split(":");
    var dia = partesFecha[0];
    var mes = partesFecha[1];
    var anio = partesFecha[2];
    var hora = partesHora[0];
    var minutos = partesHora[1];
    var segundos = partesHora[2];
    document.getElementById("dateNow").innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`+"ultima visita "+dia + "/" + mes + "/" + anio + " " + hora + ":" + minutos + ":" + segundos;
}

setInterval(setDateTime, 1000);
