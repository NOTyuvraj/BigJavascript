
function deleteCard(){
    document.body.addEventListener("click" , function (event){
        if(event.target.closest(".close-btn")){
            const card = event.target.closest(".card");
            if(card){
                card.remove();
            }
        }
    });
}

export default deleteCard;