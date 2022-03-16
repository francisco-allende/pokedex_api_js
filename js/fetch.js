//backtick is alt grl + }/] button
function fetchPokemon() 
{
    //Cada URL tiene un id. Cada fetch sera con un pokemon distinto gracias a for
    for(let i = 1; i <= 10; i++)
    {
        //Save API URL. Trae a todos. Filtro por id en la URL
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`; 
        
        //fetching the API....
        fetch(url)
        .then( res =>  //es una promise, parecido a try catch. 
        {
            return  res.json(); //traigo en json la data del url
        })
        .then(data => 
        {
            //extract data from an actual pokemon. Its an object of an array
            //Initalize an empty pokemon object
            const pokemon = 
            {
                //fill its fields
                name: getName(data),
                id: getId(data),
                frontImage: data.sprites['front_default'],
                type: data.types.map(type =>  
                    type.type.name) //mapeo el nombre del tipo (ya que puede tener mas de 1)
                    .join(', '), //paso a string

                stats: data.stats.map(stats =>
                    `${stats.stat.name}:  ${stats.base_stat}`),
                    
                    //`<li class="li-stats"> ${stats.stat.name}:  ${stats.base_stat} </li>`)                
            }

            displayPokemon(pokemon);
        })
    }    
} 
fetchPokemon()

//La primera en mayusc, las otras no
const getName = (poke) => {return  mayusc(poke.name)}
const getId = (poke) => {return poke.id}