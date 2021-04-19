document.addEventListener('DOMContentLoaded', createGameBoard);
 
const cardArray = [{
    name: "condemn",
    image: "images/condemn.png"
},{
    name: "condemn",
    image: "images/condemn.png"
},{
    name: "flurry",
    image: "images/flurry.png"
},{
    name: "flurry",
    image: "images/flurry.png"
},{
    name: "kindling",
    image: "images/kindling.png"
},{
    name: "kindling",
    image: "images/kindling.png"
},{
    name: "pride",
    image: "images/pride.png"
},{
    name: "pride",
    image: "images/pride.png"
},{
    name: "sunwell",
    image: "images/sunwell.png"
},{
    name: "sunwell",
    image: "images/sunwell.png"
},{
    name: "tavish",
    image: "images/tavish.png"
},{
    name: "tavish",
    image: "images/tavish.png"
}];
 
function createGameBoard() {
    let gameboard = document.getElementById('gameBoard');
 
    let gridContainer = document.createElement('div');
    gridContainer.className = "grid";
 
    for (let i = 0; i < 12; i++) {
        let item = document.createElement('div');
        item.className = 'item';
 
        let card = document.createElement('img');
        card.setAttribute('src','images/card_back.png');
        card.setAttribute('id', i);
        card.addEventListener('click', flipCard);
 
        item.appendChild(card);
        gridContainer.appendChild(item);
    }
    
    gameboard.appendChild(gridContainer);
 
    cardArray.sort(() => 0.5 - Math.random())
}

let cardChoosen = []
 
function flipCard() {
    let cardId = this.getAttribute('id');
    this.setAttribute('src', cardArray[cardId].image);
    cardChosen.push(cardArray[cardId]);

    if (cardChoosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

    function checkForMatch(){
        const cards = document.querySelectorAll('img');

        let selectCardOne = cardChosenId[0];
        let selectCardTwo = cardChosenId[1];
        let ConsoleMessage = "";
        
    if (cardChoosen[0].name === cardChoosen[1].name) {
        cards[selectCardOne].setAttribute('src', 'img/white.png');
        cards[selectCardTwo].setAttribute('src', 'img/white.png');
        score = score + 1;
        ConsoleMessage = "You found a match!!";
    } else {
        cards[selectCardOne].setAttribute('src', 'img/card_back.png');
        cards[selectCardTwo].setAttribute('src', 'img/card_back.png');
        ConsoleMessage = "Sorry, try again...";
    }

    document.getElementById('gameScore').textContent = score;
    document.getElementById('gameConsole').textContent = ConsoleMessage;

    cardChoosen = []
    cardChoosenId = []

    if (score === cardArray.length / 2) {
        document.getElementById("gameConsole").textContent = 'Congratulations!!!';
    }
}
