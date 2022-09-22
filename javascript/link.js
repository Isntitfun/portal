const linkBtn = document.querySelector(".link-btn");
const links = document.querySelector(".links");
const column1 = document.querySelector(".portal-column1");
const column2 = document.querySelector(".portal-column2");
const email = links.querySelector("textarea:last-child");

function handleClickLinkBtn() {
  links.classList.toggle("links__linkbtn");
  column1.classList.toggle("column1__linkbtn");
  linkBtn.classList.toggle("link-btn__linkbtn");
  email.select();
  document.execCommand("copy");
}

linkBtn.addEventListener("click", handleClickLinkBtn);
