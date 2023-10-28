document.write("<h1>Desglossament en bitllets<h1>");
var bitlletsClient = window.prompt("Introdueix els bitllets que tens: ");
if(this.bitlletsClient % 5 != 0){
    document.write("<h2>Ha de ser multiple de 5!<h2>");
}else{
    var bitllets = [5, 10 , 20, 50, 100, 200, 500];
    var numeroDesglossament = [0,0,0,0,0,0,0];
    document.write("El teus bitllets son"+this.bitlletsClient);
while(this.bitlletsClient != 0){
   if(this.bitlletsClient>=500){
        this.numeroDesglossament[6]++;
        this.bitlletsClient = this.bitlletsClient-500;
   }else if (this.bitlletsClient>=200) {
        this.numeroDesglossament[5]++;
        this.bitlletsClient = this.bitlletsClient-200;
   }else if (this.bitlletsClient>=100) {
        this.numeroDesglossament[4]++;
        this.bitlletsClient = this.bitlletsClient-100;
   }else if(this.bitlletsClient>=50){
        this.numeroDesglossament[3]++;
        this.bitlletsClient = this.bitlletsClient-50;
   }else if(this.bitlletsClient>=20){
        this.numeroDesglossament[2]++;
        this.bitlletsClient = this.bitlletsClient-20;
   }else if(this.bitlletsClient>=10){
        this.numeroDesglossament[1]++;
        this.bitlletsClient = this.bitlletsClient-10;
   }else{
        this.numeroDesglossament[0]++;
        this.bitlletsClient = this.bitlletsClient-5;
   }
}

for (let i = 0; i < this.bitllets.length; i++) {
    document.write("<p>Bitllets de "+this.bitllets[i]+": "+this.numeroDesglossament[i]+"</p>");
}
}

