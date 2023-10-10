var finestra;
var missatge;


function EnviarMissatge(){
    this.missatge = window.prompt("Introdueix el missatge: ");
    window.postMessage(missatge, "*");

    if(finestra.addEventListener){
        addEventListener("message", listener,false);
    }else{
        console.log("adios");
    }
}


function ObrirFinestra(){
    this.finestra = window.open("", "", "width=100, height=100");
}


function listener(event){
    if ( event.origin !== "http://javascript.info" )
      return   document.getElementById("test").innerHTML = "received: "+ event.data;
  }