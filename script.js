const cardsForm = document.getElementById("cards-form");
const cardsArray = [
    "One of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands",
    "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",
    "One of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
    "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
    "One of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords",
    "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",
    "One of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles",
    "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles",
    "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers",
    "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man",
    "Death", "Temperance", "The Devil", "The Tower", "The Star",
    "The Moon", "The Sun", "Judgment", "The World"
]

const displayCards = function(event) {
    event.preventDefault();

    const cardNumber = parseInt(document.getElementById("card-number").value);
    const inverted = document.getElementById("inverted").checked;

    if (cardNumber > 78) {
        alert("Please choose a number less than or equal to 78!");
        return;
    }

    drawCards(cardNumber, inverted);
}

const shuffleCards = function(array) {
    // Fisher-Yates shuffle
    var currentLength = array.length;
    var temp;
    var i;

    while (currentLength) {
        i = Math.floor(Math.random() * currentLength--);

        temp = array[currentLength];
        array[currentLength] = array[i];
        array[i] = temp;
    }

    return array;
}

const drawCards = function(cardNumber, inverted) {
    console.log(cardNumber);
    console.log(inverted);

    const cardListEl = document.getElementById("card-list");
    cardListEl.innerHTML = "";

    const shuffledDeck = shuffleCards(cardsArray);

    for (i = 0; i < cardNumber; i++) {
        const cardEl = document.createElement("li");

        var cardText = shuffledDeck[i];

        if (inverted) {
            const invert = Math.random();
            if (invert < .5) {
                cardText += ", upright";
            } else {
                cardText += ", inverted";
            }
        }

        cardEl.textContent = cardText;
        cardListEl.appendChild(cardEl);
    }
}



cardsForm.onsubmit = displayCards;