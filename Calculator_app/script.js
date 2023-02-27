"use strict";

// Variables
const input = document.querySelector(`#input-window`); // window where the numbers show
const number = document.querySelectorAll(`.num`); // 0 to 9
const operator = document.querySelectorAll(`.operator`); // - and +
const decimal = document.querySelector(`.decimal`); // .
const equal = document.querySelector(`.equal`); // =
const clear = document.querySelector(`.all-clear`); // clear screen

// Working numbers
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener(`click`, function () {
    // Get value from each number and show it in input
    input.textContent = Number(number[i].dataset.value);
    //
  });
}
