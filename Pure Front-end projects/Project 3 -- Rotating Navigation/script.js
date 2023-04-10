const open = document.querySelector(`#open`);
const close = document.querySelector(`#close`);
const container = document.querySelector(`.container`);

open.addEventListener(`click`, () => {
  container.classList.add(`show-nav`);
  console.log(`add`);
});

close.addEventListener(`click`, () => {
  container.classList.remove(`show-nav`);
  console.log(`close`);
});
