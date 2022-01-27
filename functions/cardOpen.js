function cardOpen(index){
    var skillRow = document.getElementsByClassName("skill-row");
    var buttonGroup = document.getElementsByClassName("btn-outline-light");
    document.getElementById("my_sites").style.display = "none";
    for(i = 0; i < skillRow.length; i++){
        if(i == index){
            var card = skillRow[i];
            var button = buttonGroup[i];
            if (card.style.display == "flex"){
                card.style.display = "none";
                button.style.display = "inline-block";
            } else {
                card.style.display = "flex";
                button.style.display = "none";
            }
        } else {
            skillRow[i].style.display = "none";
            buttonGroup[i].style.display = "inline-block";
        }   
    }
}

function cardsClose(id){
    var section = document.getElementById(id);
    section.style.display = "flex";
    var skillRow = document.getElementsByClassName("skill-row");
    var buttonGroup = document.getElementsByClassName("btn-outline-light");
    for(i = 0; i < skillRow.length; i++){
        skillRow[i].style.display = "none";
        buttonGroup[i].style.display = "inline-block";
    }
}