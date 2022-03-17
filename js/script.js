

const DOMitems = document.getElementById('items');  

let pokeList = []
let pokeTypes = []



function displayPokemon(pokemon)
{
    
    pokeTypes.push(pokemon.type);

    const miNodo = document.createElement('div');
    const miNodoCardBody = document.createElement('div');
    const card =  document.createElement('div');

    miNodo.classList.add('card-style');

    pokemon.stats[0] = colorizeStats(pokemon.stats[0])
    pokemon.stats[1] = colorizeStats(pokemon.stats[1])
    pokemon.stats[2] = colorizeStats(pokemon.stats[2])
    pokemon.stats[3] = colorizeStats(pokemon.stats[3])
    pokemon.stats[4] = colorizeStats(pokemon.stats[4])
    pokemon.stats[5] = colorizeStats(pokemon.stats[5])

    miNodo.innerHTML += `
    <h1 class="mainTextName">${pokemon.name}</h1>   
    <p style="text-align: center;"><img src="${pokemon.frontImage}" class="img-poke"></p>
                
                <div class="div-card">
                <ul class="ul-card">
                    <h4 class="mainText"> Id: ${pokemon.id} </h4>
                    <h4 class="mainText"> Type: ${pokemon.type} </h4>
                    <h4 class="mainText"> Stats: </h4>
                      
                        ${pokemon.stats[0]}
                        ${pokemon.stats[1]}
                        ${pokemon.stats[2]}
                        ${pokemon.stats[3]}
                        ${pokemon.stats[4]}
                        ${pokemon.stats[5]}
                        </ul>
                    </div>
                
                      `
    miNodoCardBody.appendChild(card);
    DOMitems.appendChild(miNodo)
}

//stats reach 120. So, I divided into 3. Red for bad, blue for good, green for very good
function colorizeStats(stat)
{
    stat = mayusc(stat);

    let bad = hastaCuarenta(stat);
    let good = hastaOchenta(stat);
    let excellent = hastaCientoVeinte(stat);
    let god = hastaCientoSesenta(stat);

    if(bad)
    {
        stat = `<li class="badStat"> ${stat} </li>`;
        return stat;
    }
    else if(good)
    {
        stat = `<li class="goodStat""> ${stat} </li>`;
        return stat;
    }
    else if(excellent)
    {
        stat = `<li class="excellentStat""> ${stat} </li>`;
        return stat;
    }
    else if(god)
    {
        stat = `<li class="godStat""> ${stat} </li>`;
        return stat;
    }
}

function hastaCuarenta(stat)
{
    for(let i = 10; i < 41; i++)
    {
        if(stat.includes(i) && !hastaCientoVeinte(stat) && !hastaCientoSesenta(stat))
        {
            return true
        }
    }
    return false
}

function hastaOchenta(stat)
{
    for(let i = 40; i < 81; i++)
    {
        if(stat.includes(i))
        {
            return true
        }
    }
    return false
}


function hastaCientoVeinte(stat)
{
    for(let i = 80; i < 120; i++)
    {
        if(stat.includes(`${i}`))
        {
            return true;
        }
    }
    return false;
}

function hastaCientoSesenta(stat)
{
    for(let i = 120; i <= 160; i++)
    {
        if(stat.includes(`${i}`))
        {
            return true;
        }
    }
    return false;
}

function mayusc(string)
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function savePokeType(pokemon)
{
    pokeTypes.push(pokemon.type);
}

function savePokeList(pokemon)
{
    pokeList.push(pokemon);
}


