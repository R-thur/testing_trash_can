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

const test = ["S", "E", "L", "E", "C", "T", "I", "N", "G"];

let selecting = function () {
  for (let i = 0; i < test.length; i++) {
    console.log(test[i]);
    list.textContent = test[i];
  }
};

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
let preloader = doc.querySelector(".preloader");
let list = document.querySelectorAll(".list");
list.textContent = "hi";
