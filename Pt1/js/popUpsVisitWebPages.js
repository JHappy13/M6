var windows = [];
var https = "https://";
var widthWindow = (window.innerWidth / 2) - 50;
var heightWindow = window.innerHeight / 2;

function visitPagesWebs() {
    // Cerrar ventanas anteriores después de un retraso
    for (let i = 0; i < windows.length; i++) {
        if (windows[i] && !windows[i].closed) {
                windows[i].close();
        }
    }

    let link1 = getValueInputsWebPage("FirstWebPageLink");
    let link2 = getValueInputsWebPage("SecondWebPageLink");
    let link3 = getValueInputsWebPage("ThirdWebPageLink");
    let link4 = getValueInputsWebPage("FourthWebPageLink");

    localStorage.setItem('link1', link1);
    localStorage.setItem('link2', link2);
    localStorage.setItem('link3', link3);
    localStorage.setItem('link4', link4);

    let windowWebPage1 = window.open(https + link1, "window1", "width=" + widthWindow + ", height=" + heightWindow).moveTo(0, 0);
    let windowWebPage2 = window.open(https + link2, "window2", "width=" + widthWindow + ", height=" + heightWindow).moveTo(window.innerWidth * 2, 0);
    let windowWebPage3 = window.open(https + link3, "window3", "width=" + widthWindow + ", height=" + heightWindow).moveTo(0, window.innerWidth * 2);
    let windowWebPage4 = window.open(https + link4, "window4", "width=" + widthWindow + ", height=" + heightWindow).moveTo(window.innerWidth * 2, window.innerWidth * 2);

    windows = [windowWebPage1, windowWebPage2, windowWebPage3, windowWebPage4];
    
}

function getValueInputsWebPage(inputId) {
    return document.getElementById(inputId).value;
}