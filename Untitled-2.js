const cardArray = [
  {
    name: "fries",
    num: 1,
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    num: 1,
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    num: 1,
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    num: 1,
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    num: 1,
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    num: 1,
    img: "images/pizza.png",
  },
  {
    name: "fries",
    num: 2,
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    num: 2,
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    num: 2,
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    num: 2,
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    num: 2,
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    num: 2,
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenId = [];
let cardChosenNum = [];
const cardswon = [];

function creatBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
creatBoard();

function checkMatck() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChosenId[0];
  const optionTwoId = cardChosenId[1];
  if (optionTwoId === optionOneId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }

  if (cardChosen[0] === cardChosen[1] && cardChosenNum[0] != cardChosenNum[1]) {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardswon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
  }
  resultDisplay.textContent = cardswon.length;
  cardChosen = [];
  cardChosenNum = [];
  cardChosenId = [];

  if (cardswon.length === cardArray.length / 2) {
    resultDisplay.textContent = "You won";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenNum.push(cardArray[cardId].num);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatck, 300);
  }
}
