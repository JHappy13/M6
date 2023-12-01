class Rellotge{
    
    constructor(Rellotge){
        this.Rellotge = Rellotge;
        this.stopRellotge = false;
    }

    //Obtenir el temps actual
    GetTime(){
        return this.Rellotge;
    }

    //Parar el cronometro
    StopTime(stop, stopRellotge){
        this.stopRellotge = stop;
        this.Rellotge = stopRellotge;
    }

    //Reanudar el cronometro
    StartTime(start){
        this.stopRellotge = start;
    }

    // Cada cierto tiempo de segundo se imprimira la funcion
    setFunctionOnTime(time, funcion){

    }

    //Cuando se ejecuta se muestra la información de los segundos pasados
    Execute(){
        
    }

       
}