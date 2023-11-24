var r = new Rellotge();
var dateActual = Date.now(); 

function GetTimeBtn(){
    alert(r.GetTime());
}

function formatearRelog(temps){
    const segundos = Math.floor((temps % (60 * 1000)));
    return segundos;
}

setInterval(() => {
    let temps = Date.now()-dateActual;
    r.relog = document.getElementById('rellotge').innerHTML= this.formatearRelog(temps);
}, 1);