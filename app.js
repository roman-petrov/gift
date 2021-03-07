function toggleElement(show, hide) {
  const showElement = document.querySelector(show);
  const hideElement = document.querySelector(hide);
  showElement.style = "opacity: 1";
  hideElement.style = "opacity: 0";
}

function protect() {
  if (window.devicePixelRatio !== 1 && window.devicePixelRatio !== 1.5) {
    toggleElement(".errorText", ".center");
  } else {
    toggleElement(".center", ".errorText");
  }
}

protect();
window.addEventListener("resize", protect);
