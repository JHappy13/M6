var ventana;
var x=0;
var y=0;

function obrir(){
   this.ventana =window.open("", "", "width=200,height=200");
   this.ventana.focus();
}

function reset(){
    this.x = 0;
    this.y = 0;
    this.ventana.moveTo(this.x, this.y);
    this.ventana.focus();
}

function tancar(){
   this.ventana.close();
}

function pujar(){
    this.y = this.y-100;
    this.ventana.moveTo(this.x, this.y);
}

function baixar(){
    this.y = this.y+100;
    this.ventana.moveTo(this.x, this.y);
    this.ventana.focus();
}

function esquerra(){
    this.x = this.x-100;
    this.ventana.moveTo(this.x, this.y);
    this.ventana.focus();
}

function dreta(){
    this.x = this.x+100;
    this.ventana.moveTo(this.x, this.y);
    this.ventana.focus();
}
