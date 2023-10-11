const colors = ["#8A2BE2", "#0000FF", "#DC143C", "#FF1493", "#ADD8E6","#7CFC00","#9ACD32"];


function changeColorTitle(){

    let randomNumber = Math.floor(Math.random() * 6) + 1; //Numero random entre 0 i 6

    document.getElementById("title").style.color = colors[randomNumber]; //Asignar el color al titol

}

// Canviar el color cada 5 segons
// Agafa la funcio "changeColorTitle" y ho executa
setInterval(changeColorTitle, 5000);