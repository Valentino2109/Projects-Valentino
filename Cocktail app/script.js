"use strict";

// Variables
const input = document.querySelector(`#input-window`);
const btnSearch = document.querySelector(`#btn-search`);
const cocktailList = document.querySelector(`#cocktail-list`);
const cocktailDetails = document.querySelector(`#cocktail-details`);

// Fetching cocktail API
btnSearch.addEventListener(`click`, function () {
  const cocktailName = input.value.trim();
  console.log(cocktailName);

  // Put cocktails on the cocktail list in index.html
  const htmlList = `<li>${cocktailName.drinks.strDrink}</li>`;
  // Fetch API
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
  )
    .then((response) => {
      return response.json();
    })
    .then((cocktailName) => {
      cocktailList.insertAdjacentHTML(`afterbegin`, htmlList);
    });
});
