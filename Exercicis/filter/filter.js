// Crea un programa que a partir d'un array de 10 números, obtingui dos arrays anomenats parells 
//i senars amb els números parells i 
//senars respectivament de l'array inicial. Usa el mètode filter.
// map, arrow,filter, reduce, findIndex
// Dado un objeto


posts = [ 
    {id: 1, upVotes: 2},
    {id: 2, upVotes: 18}, 
    {id: 3, upVotes: 1}, 
    {id: 4, upVotes: 30}, 
    {id: 5, upVotes: 50} 
  ];

parell = [];
senar = [];

function mapFunction(){
    posts.map(function(i){
        if(i.id % 2 == 0){
            return this.parell.push(i.id);
        }
    });
}

this.mapFunction();