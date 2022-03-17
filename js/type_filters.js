let img;
let counter = 0;
//Si uso Jquery, si o si tengo que usar su selector
let divTypes = $(".container-div-types");

function showOrHideTypeButtons() 
{
    counter++;
    if (counter % 2 != 0) 
    {
        divTypes.fadeIn(500);
    } 
    else 
    {
        divTypes.fadeOut(500);
    }
}

function filterByType(string) 
{
    let imgs = document.getElementsByClassName("card-style");

    for (let i = 0; i < pokeList.length; i++) 
    {
        img = imgs[i];

        if (pokeList[i].type.includes(string) || string == "showAll") 
        {
        img.style = `display: show`;
        } 
        else 
        {
        img.style = `display: none`;
        }
    }
}

function showAll()
{
    filterByType("showAll");
}

//Recibe por parametro un string bad, good, excellent o god. Logica similar a type
function filterByStat(string) {
    let imgs = document.getElementsByClassName("card-style");

    for (let i = 0; i < pokeList.length; i++) 
    {
        img = imgs[i];
        for (let j = 0; j < 6; j++) 
        {
            if (pokeList[i].stats[j].includes(`${string}Stat`)) 
            {
                img.style = `display: show`;
            } 
            else 
            {
                img.style = `display: none`;
            }
        }
    }
}

//No funciona con windows on load. Necesita que el usuario haga algo. Lo llamo con onclick en body
function playMusic()
{
    let audio = document.getElementById('audioTag')
    audio.play();
}



   
  

  
  
