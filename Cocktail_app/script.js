"use strict";

// Variables
const input = document.querySelector(`#input-window`);
const btnSearch = document.querySelector(`#btn-search`);
const cocktailList = document.querySelector(`.cocktail-list-ordered`);
const cocktailDetails = document.querySelector(`#cocktail-details`);

// Button function
btnSearch.addEventListener(`click`, function () {
  const getCocktailName = input.value.trim();

  // On each click, refresh the list
  cocktailList.innerHTML = ``;

  // Must have more than 2 letters
  if (getCocktailName.length < 3) return;

  // Get cocktail name path
  const request = new XMLHttpRequest();
  request.open(
    `get`,
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${getCocktailName}
    `,
    true
  );
  request.send();
  console.log(request);

  // JSON part
  request.addEventListener(`load`, function () {
    const data = JSON.parse(this.response);
    const drinksAll = data.drinks;

    // For loop
    for (let i = 0; i < drinksAll.length; i++) {
      // Grabbing all drinks from the input
      let drink = data.drinks[i].strDrink;
      let drinkID = data.drinks[i].idDrink;
      console.log(drink);

      // Making new list item in HTML
      const linkItem = `<li><a src="${drinkID}">${drink}</a></li>`;

      // Exporting new list item to HTML
      cocktailList.insertAdjacentHTML(`afterbegin`, linkItem);
    }
  });
});
