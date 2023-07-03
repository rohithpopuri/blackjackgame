let player = {
    name: "Per",
    chips: 145
}
let sum ;
let hasblackjack = false;
let isalive=false;
let message="";
let cards=[];
console.log(player.name)

document.getElementById("player-el").textContent = player.name + ": $" + player.chips;

function getRandomcard(){
    let r=Math.floor(Math.random()*13)+1;
    if(r===1){
        return 11;
    }
    else if(r>=11 && r<=13){
        return 10;
    }
    return r;
}
function startgame(){
    isalive=true;
    let firstcard=getRandomcard();
    let secondcard=getRandomcard();
    cards=[firstcard,secondcard];
    sum=firstcard+secondcard;
    start();
}
function start(){
    document.querySelector("#sum-el").textContent="Sum :"+sum;
    let card="cards :";
    for(let i=0;i<cards.length;i++){
        card+=cards[i]+" "
    }
    document.querySelector("#cards-el").textContent=card;

    if(sum<=20){
        message="do you want to draw another card?😊";
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack! 🥳";
        hasblackjack=true;
    }
    else{
    message="You're out of the game! 😭";
    isalive=false;
    }
    document.getElementById("mess-el").textContent=message;


}
function New(){
    document.querySelector("#mess-el").textContent="Drawing a new card from the deck!";
    if(isalive===true && hasblackjack===false){
        let Newcard=getRandomcard();
        sum+=Newcard;
        cards.push(Newcard);
        start();
    }

    
}
console.log(hasblackjack);
console.log(cards);
