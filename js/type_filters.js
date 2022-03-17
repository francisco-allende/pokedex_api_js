function filterByType(string)
{
    for(type of pokeTypes)
    {
        typeSelected = pokeTypes.filter(
            (pokeTypes) => pokeTypes.includes(`${string}`)); 
    }
    console.log(typeSelected);
}

//Si uso Jquery, si o si tengo que usar su selector 
let counter = 0;
let divTypes =  $(".container-div-types"); 

function showOrHideTypes()
{
    counter++;
    if(counter%2 !=0){
        divTypes.fadeIn(500);
    }else{
        divTypes.fadeOut(500);
    }
}

