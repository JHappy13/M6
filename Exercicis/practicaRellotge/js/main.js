var dateActual = Date.now(); //Fecha actual
var r = new Rellotge(); //Definir la variable r

//Funciones de botones
function GetTimeBtn(){
    alert(this.r.GetTime());
}

function StopTimeBtn(){
    this.r.StopTime(true, r.Rellotge);
}

function StartTimeBtn(){
    this.r.StartTime(false);
}

function ExecuteBtn(){
    
}

//Funcion para formatear el relog
function formatearRelog(temps){
    const segundos = Math.floor(temps /1000);
    const milisegundos = Math.floor(temps % 10000);
    return segundos + ":" + milisegundos;
}


setInterval(() => {
    let temps = Date.now() - dateActual;
    if(!this.r.stopRellotge){
        r.Rellotge = formatearRelog(temps);
        document.getElementById('rellotge').innerHTML = formatearRelog(temps);
    }else{
        document.getElementById('rellotge').innerHTML = r.Rellotge;
    }
}, 1);