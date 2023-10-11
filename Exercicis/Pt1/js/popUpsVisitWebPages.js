var windowWebPage1;
var windowWebPage2;
var windowWebPage3;
var windowWebPage4;
var https = "https://";
var widthWindow = (window.innerWidth / 2)-50;
var heightWindow = window.innerHeight / 2;

function visitPagesWebs(){
    let link1 = this.getValueInputsWebPage("FirstWebPageLink"); 
    let link2 = this.getValueInputsWebPage("SecondWebPageLink"); 
    let link3 = this.getValueInputsWebPage("ThirdWebPageLink"); 
    let link4 = this.getValueInputsWebPage("FourthWebPageLink"); 

    this.windowWebPage1 = window.open(this.https+link1, "", "width="+this.widthWindow+", height="+this.heightWindow).moveTo(0,0);
    this.windowWebPage2 = window.open(this.https+link2, "", "width="+this.widthWindow+", height="+this.heightWindow).moveTo(1000,0);
    this.windowWebPage3 = window.open(this.https+link3, "", "width="+this.widthWindow+", height="+this.heightWindow).moveTo(0,1000);
    this.windowWebPage4 = window.open(this.https+link4, "", "width="+this.widthWindow+", height="+this.heightWindow).moveTo(1000,1000);
}

function getValueInputsWebPage(inputId){
    return document.getElementById(inputId).value;
}