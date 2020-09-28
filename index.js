const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// toggle Nav
toggle.addEventListener("click", function () {
  document.body.classList.toggle("show-nav");
});

// show modal
open.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

// hide modal
close.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

//  hide modal by clicking outside
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    return modal.classList.remove("show-modal");
  } else return;
});
