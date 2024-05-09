/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("something has changed!");

  const cardNumber = Math.floor(Math.random() * 12);
  const suitNumber = Math.floor(Math.random() * 4);
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = [
    {
      name: "spade",
      symbol: "♠"
    },

    {
      name: "heart",
      symbol: "♥"
    },
    {
      name: "club",
      symbol: "♣"
    },
    {
      name: "diamond",
      symbol: "♦"
    }
  ];
  const pokerCard = document.getElementById("pokerCard");
  pokerCard.classList.add("col-12", "col-md-4", "col-lg-3");

  const suitElement1 = document.createElement("div");
  suitElement1.innerHTML = `${suits[suitNumber].symbol}`;
  suits[suitNumber].name === "heart"
    ? suitElement1.classList.add("fs-1", "text-start", "mx-3", "text-danger")
    : suitElement1.classList.add("fs-1", "text-start", "mx-3");
  pokerCard.appendChild(suitElement1);

  const cardElement = document.createElement("div");
  cardElement.innerHTML = `${cards[cardNumber]}`;
  cardElement.classList.add("fs-1", "text-center");
  pokerCard.appendChild(cardElement);

  const suitElement2 = document.createElement("div");
  suitElement2.innerHTML = `${suits[suitNumber].symbol}`;
  suitElement2.classList.add("fs-1", "text-end", "mx-3");
  suits[suitNumber].name === "heart"
    ? suitElement2.classList.add("fs-1", "text-start", "mx-3", "text-danger")
    : suitElement2.classList.add("fs-1", "text-start", "mx-3");
  pokerCard.appendChild(suitElement2);

  console.log(suits);
  console.log(cards);
};
