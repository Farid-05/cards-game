let playerDetails =
{
    pname :"Per:",
    chips :200
}
let cardsArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumEl = document.getElementById("sum-el");
let messEl = document.getElementById("mess");
let cardEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = playerDetails.pname + " " + "$" + playerDetails.chips;
function start_game()
    {   
        isAlive = true;
        let firstCard = getrandomCard();
        let secondCard = getrandomCard();
        cardsArray =[firstCard, secondCard];
        sum = firstCard + secondCard ;
        render_game();
    }
function getrandomCard()
    {
        let randomCards = Math.floor(Math.random() * 21) + 1;
        if(randomCards === 1)
        {
            return 11;
        }
        else if(randomCards > 10 && randomCards < 14)
        {
             return 10;
        }
        else
        {
            return randomCards;
        }
    }
function render_game(){
    cardEl.textContent = "Cards: "
    if (sum <= 20){
        message = "Do you want to draw the new card?";
        isAlive = true;
    }
    else if (sum === 21){
        message = "you've got BlackJack";
        hasBlackJack = true;
    }
    else{
        message = "You're out of the game?";
        isAlive = false;
    }
    for (let i = 0; i < cardsArray.length; i++){
    cardEl.textContent += cardsArray[i] + " ";
    }
    messEl.textContent = message;
    sumEl.textContent = "Sum:" + sum;
}
function draw_card(){
    if(isAlive === true && hasBlackJack ===false)
        {
            console.log("You drew a card...");
            let card = getrandomCard();
            sum += card;
            cardsArray.push(card);
            render_game();
        }
 
}
// console.log("Player has a BlackJack :" + hasBlackJack );
// console.log("is Player alive :" + isAlive );