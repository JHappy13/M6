this.figuraA();
this.figuraB();
this.figuraC();
this.figuraD();
this.figuraE();
this.figuraF();
this.volca();

function figuraA(){
    document.write("<h1>Figura A </h1>");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            document.write("   *  ");
        }
        document.write("<br>");
    }
}


function figuraB(){
    document.write("<h1>Figura B </h1>");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
           if(i == 0){
            document.write("*&nbsp;");
           }else if(j == 0  || j == 9){
            document.write("*&nbsp;");
           }else if(i == 9){
            document.write(" * ");
           }else{
            document.write(" &nbsp&nbsp; ");
           }
        }
        document.write("<br>");
    }
}

function figuraC(){
    document.write("<h1>Figura C</h1>");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if(i >= j){
                document.write("*&nbsp;");
            }  
        }
        document.write("<br>");
    }
}

function figuraD(){
    document.write("<h1>Figura D</h1>");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if(i > j){
                document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
            }else{
                document.write("*&nbsp;&nbsp;");
            }
        }
        document.write("<br>");
    }
}


function figuraE(){
    document.write("<h1>Figura E</h1>");
    for (let i = 0; i < 10; i++) {
        for (let j = 10; j >= 0; j--) {
            if(i < j){
                document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
            }else{
                document.write("*&nbsp;&nbsp;");   
            }
        }
        document.write("<br>");
    }
}


function figuraF(){
    document.write("<h1>Figura F</h1>");
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if(i <= j){
                document.write("*&nbsp;");
            }
        }
        document.write("<br>");
    }
}


function volca(){
    document.write("<h1>Figura Volcà</h1>");
    var numero = 2;
    while(numero <= 64){
        for (let i = 0; i < numero; i++) {
            document.write("<em>*</em>");
        }
        document.write("<br>");
        numero = numero + numero;
    }
}