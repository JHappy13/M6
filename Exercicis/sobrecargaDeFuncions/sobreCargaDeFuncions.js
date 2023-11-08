var usuaris = {
    noms : ["joan garcia", "jaume pontons", "ana riu", "marta aran", "alex fornell", "mariona cots"]
 };

function afegirMetode(objecte, nom, funcio){
	var old = objecte[nom];
	objecte[nom] = function(){
				if(funcio.length == arguments.length)	
					return funcio.apply(this, arguments);
				else if (typeof old == 'function')
					return old.apply(this, arguments);
		};
}


var persona = {};
afegirMetode(usuaris);
afegirMetode(usuaris, "Calcul");
afegirMetode(usuaris, "Calcul", "Matricula");
