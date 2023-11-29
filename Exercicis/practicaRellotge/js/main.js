var dateActual = Date.now();
var r;

function GetTimeBtn(){
    alert(this.r.GetTime());
}

function StopTimeBtn(){
    console.log("Stop");
}

function StartTimeBtn(){
    console.log("Start");
}

function ExecuteBtn(){
    console.log("Execute");
}

function formatearRelog(temps){
    const segundos = Math.floor(temps /1000);
    const milisegundos = Math.floor(temps % 10000);
    return segundos + ":" + milisegundos;
}

setInterval(() => {
    let temps = Date.now() - dateActual;
    
    // Crear una nueva instancia de Rellotge cada vez que se actualiza
    r = new Rellotge(formatearRelog(temps));

   document.getElementById('rellotge').innerHTML = formatearRelog(temps);
}, 1);