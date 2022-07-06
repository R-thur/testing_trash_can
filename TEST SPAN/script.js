"use strict";

// Player's button
const player = document.getElementById("player");
const playerbtn = document.querySelector(".playerbtn");
const playerbtnspan = document.querySelector(".playerbtnspan");
const listtest = document.querySelector(".list");
//Computer's button
const computer = document.getElementById("computer");
const computerbtn = document.querySelector(".computerbtn.hidden");
const computerbtnspan = document.querySelector(".computerbtnspan.hidden");
// const preloader = document.querySelectorAll(".preloader");

// const test = ["S", "E", "L", "E", "C", "T", "I", "N", "G"];

// let selecting = function () {
//   for (let i = 0; i < test.length; i++) {
//     console.log(test[i]);
//     list.textContent = test[i];
//   }
// };

// document.querySelector(".playerbtnspan").addEventListener("click", function () {
//   player.className = "rock";
//   player.className = "rockspan";
//   computerbtn.className = "computerbtn";
//   computerbtnspan.className = "computerbtnspan";
// });

// document.getElementById("player").addEventListener("click", function () {
//   playerbtn.className = "rock";
//   playerbtn.textContent = "Rock";
//   //   playerbtnspan.className = "rock";
//   computerbtn.className = "computerbtn";
//   computerbtnspan.className = "computerbtnspan";
//   computerbtn.textContent = "Hello!";
// });

// document.querySelector(".computerbtn").addEventListener("click", selecting);
// let preloader = document.querySelector(".preloader");
// let list = document.querySelectorAll(".list");
// list.style.color = "#ff0000";
// document.querySelector(".preloader").textContent = "hi there";
let list = document.querySelectorAll(".list");
const test = ["S", "E", "L", "E", "C", "T", "I", "N", "G"];

// let selecting = function () {
//   for (let i = 0; i < test.length; i++) {
//     console.log(test[i]);
//     list.insertAdjacentText = test[i];
//   }
// };

let container = document.querySelector(".preloader");
let children = container.childNodes;

const selecting = function () {
  for (let i = 1; i < children.length - 1; i++) {
    children[i].textContent = test[0];
    console.log(test[i]);
  }
};

selecting();
