const toggles = document.querySelectorAll(`.faq-toggle`);
const containers = document.querySelectorAll(`.faq`);

toggles.forEach((toggle) => {
  toggle.addEventListener(`click`, () => {
    toggle.parentNode.classList.toggle(`active`);
  });
});
