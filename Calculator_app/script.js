"use strict";

// Variables
const input = document.querySelector(`#input-window`);
let numbers = document.querySelectorAll(`.num`);
let operator = document.querySelectorAll(`.operator`);
const decimal = document.querySelector(`.decimal`);
const equal = document.querySelector(`.equal`);
const clear = document.querySelector(`.all-clear`);

// Event listeners
numbers.addEventListener(`click`, (e) => {
  console.log(`Button has been clicked`);
});
