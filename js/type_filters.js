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
    play();
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

function play() {
    let audio = document.getElementById('audioTag').play();
    audio.play();
  }
  
