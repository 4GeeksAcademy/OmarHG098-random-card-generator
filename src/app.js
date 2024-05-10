/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
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

  const suitElement1 = document.createElement("div");
  suitElement1.classList.add(
    "card-header",
    "bg-white",
    "border-0",
    "mb-3",
    "fs-1",
    "text-start"
  );
  suitElement1.innerHTML = `${suits[suitNumber].symbol}`;
  suits[suitNumber].name === "heart" || suits[suitNumber].name === "diamond"
    ? suitElement1.classList.add("text-danger")
    : null;
  pokerCard.appendChild(suitElement1);

  // const break1 = document.createElement("br");
  // pokerCard.appendChild(break1);

  const cardElement = document.createElement("h1");
  cardElement.classList.add("card-body", "fs-1", "text-center");
  cardElement.innerHTML = `${cards[cardNumber]}`;
  pokerCard.appendChild(cardElement);

  // const break2 = document.createElement("br");
  // pokerCard.appendChild(break2);

  const suitElement2 = document.createElement("div");
  suitElement2.classList.add(
    "card-footer",
    "bg-white",
    "border-0",
    "mt-3",
    "fs-1",
    "text-end"
  );
  suitElement2.innerHTML = `${suits[suitNumber].symbol}`;
  suits[suitNumber].name === "heart" || suits[suitNumber].name === "diamond"
    ? suitElement2.classList.add("text-danger")
    : null;
  pokerCard.appendChild(suitElement2);
};
