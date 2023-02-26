"use strict";

// Variables
const input = document.querySelector(`#input-window`);
const btnSearch = document.querySelector(`#btn-search`);
const cocktailList = document.querySelector(`.cocktail-list-ordered`);
const drinkDetails = document.querySelectorAll(`.drink-with-ID`);
const cocktailDetails = document.querySelector(`#cocktail-details`);
const allIngredients = document.querySelector(`.list-ingredients`);

// Button function
const handleButtonSearch = function () {
  const getCocktailName = input.value.trim();

  // On each click, refresh the list
  cocktailList.innerHTML = ``;

  // Get cocktail name path
  const request = new XMLHttpRequest();
  request.open(
    `get`,
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${getCocktailName}
    `,
    true
  );
  request.send();

  // Must have more than 2 letters and error handling
  if (getCocktailName.length < 3) {
    return;
  }

  // JSON part
  request.addEventListener(`load`, function () {
    const data = JSON.parse(this.response);
    const drinksAll = data.drinks;

    console.log(request);
    // For loop
    for (let i = 0; i < drinksAll.length; i++) {
      // Grabbing all drinks from the input
      let drink = data.drinks[i].strDrink;
      let drinkID = data.drinks[i].idDrink;

      // Making new list item in HTML
      const linkItem = `<li onclick="handleDrinkDetails(event)" class="drink-with-ID" id="${drinkID}">${drink}</li>`;

      // Exporting new list item to HTML
      cocktailList.insertAdjacentHTML(`afterbegin`, linkItem);
    }
  });
};
btnSearch.addEventListener(`click`, handleButtonSearch);

// Input works with Enter
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Enter`) {
    handleButtonSearch();
  }
});

// Function for getting details from a list item
const handleDrinkDetails = function (event) {
  // Grab drink ID
  const getDrinkID = event.target.id;

  // On each click, refresh the list
  cocktailDetails.innerHTML = ``;
  input.value = ``;

  // Search drink details by its ID
  const request = new XMLHttpRequest();
  request.open(
    `get`,
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${getDrinkID}
    `,
    true
  );
  request.send();

  // JSON part
  request.addEventListener(`load`, function () {
    const data = JSON.parse(this.response);

    // Making a "look" of cocktail details
    const allDetails = `
    <h2>${data.drinks[0].strDrink}</h2>
    <img src="${data.drinks[0].strDrinkThumb}" alt="Picture of ${data.drinks[0].strDrink}" />
    <h3>How to instructions:</h3>
    <p>${data.drinks[0].strInstructions}</p>
    <h4>Ingredients:</h4>
    <ul>
    <li>${data.drinks[0].strIngredient1}</li>
    <li>${data.drinks[0].strIngredient2}</li>
    <li>${data.drinks[0].strIngredient3}</li>
    </ul>
    `;

    // Exporting new list item to HTML
    cocktailDetails.insertAdjacentHTML(`afterbegin`, allDetails);
  });
};
