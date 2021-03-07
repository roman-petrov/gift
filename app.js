function hideElement() {
  document.querySelector(".errorText").innerHTML =
    "Так не получится, установи масштаб страницы в 100%, чтобы получить подарок! :)";

  const element = document.querySelector(".center");
  if (!element.classList.contains("fadeOut")) {
    element.classList.add("fadeOut");
  }
}

if (window.devicePixelRatio !== 1 && window.devicePixelRatio !== 1.5) {
  hideElement();
}

window.addEventListener("resize", () => {
  hideElement();
});
