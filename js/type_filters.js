function filterByType(string)
{
    for(type of pokeTypes)
    {
        typeSelected = pokeTypes.filter(
            (pokeTypes) => pokeTypes.includes(`${string}`)); 
        
        typeUnselected = pokeTypes.filter(
            (pokeTypes) => !pokeTypes.includes(`${string}`)); 
    }

    showOrHideByFilter(string);
}

//Si uso Jquery, si o si tengo que usar su selector 
let counter = 0;
let divTypes =  $(".container-div-types"); 

function showOrHideTypeButtons()
{
    counter++;
    if(counter%2 !=0){
        divTypes.fadeIn(500);
    }else{
        divTypes.fadeOut(500);
    }
}

let img;

//filtra si matchea
function showOrHideByFilter(string)
{
    let imgs = document.getElementsByClassName('card-style');
    console.log(imgs)

    for(let i = 0; i < pokeList.length; i++)
    {
        img = imgs[i];

        if(pokeList[i].type.includes(string) || string == "showAll")
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
    showOrHideByFilter("showAll");
}

