/* SCSS HEX */
const blue = "#01a7c2ff";
const white = "#fbfffeff";
const grey = "#6d676eff";
const black = "#1b1b1eff";
const yellow = "#e9ce2cff";
function cardStyles(){
    const cardArray = document.getElementsByClassName("card-header");
    for(let n = 0; n < cardArray.length; n++){
        let current = cardArray[n]
        if(n % 2 === 0){
            current.style.backgroundColor = blue;
            current.style.color = white;
        } else {
            current.style.backgroundColor = black;
            current.style.color = yellow;
        }
    }
}