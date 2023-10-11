var date = new Date();

function setHour(){
    document.getElementById("dateNow").innerHTML = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}


setInterval(this.setHour, 1000);