const linkBtn = document.querySelector(".link-btn");
const links = document.querySelector(".links");
const column1 = document.querySelector(".portal-column1");
const column2 = document.querySelector(".portal-column2");
const column3 = document.querySelector(".portal-column3");
const clockmove = document.querySelector(".clock");
const email = links.querySelector(".email");

function handleClickLinkBtn() {
  links.classList.toggle("links__linkbtn");
  column1.classList.toggle("column1__linkbtn");
  column2.classList.toggle("column2__linkbtn");
  column3.classList.toggle("column3__linkbtn");
  clockmove.classList.toggle("clock__linkbtn");
  linkBtn.classList.toggle("link-btn__linkbtn");
  email.select();
  document.execCommand("copy");
}

linkBtn.addEventListener("click", handleClickLinkBtn);
