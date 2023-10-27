const colorPairs = [
    ["#8A2BE2", "#0000FF"],
    ["#DC143C", "#FF1493"],
    ["#ADD8E6", "#7CFC00"]
];
let colorIndex = 0; // Colors pars en el que es troba

function changeColorTitle() {
    console.log(colorIndex);
    const titleElement = document.getElementById("title");
    const titleText = titleElement.innerText;
    let coloredTitle = "";

    for (let i = 0; i < titleText.length; i++) {
        const letterColor = colorPairs[colorIndex][i % 2];
        coloredTitle += `<span style="color: ${letterColor};">${titleText[i]}</span>`;
    }

    titleElement.innerHTML = coloredTitle;
    // Canviar la seguent par de colors
    //Fins que arribi al length es reiniciara
    colorIndex = (colorIndex + 1) % colorPairs.length; 
}

// Canviar el colora cada 5 segons
setInterval(changeColorTitle, 5000);



