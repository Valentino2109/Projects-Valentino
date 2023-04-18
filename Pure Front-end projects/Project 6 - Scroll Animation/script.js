const boxes = document.querySelectorAll(`.box`);

window.addEventListener(`scroll`, checkBoxes);

checkBoxes();

function checkBoxes() {
  const magicNumber = 0.8;
  const triggerBottom = window.innerHeight * magicNumber;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop <= triggerBottom) {
      box.classList.add(`show`);
    } else {
      box.classList.remove(`show`);
    }
  });
}
