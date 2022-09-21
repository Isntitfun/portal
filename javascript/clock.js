const time = document.querySelector(".clock span");

function clockwork() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  time.innerText = `${hour} : ${min} : ${sec}`;
}
clockwork();
setInterval(clockwork, 1000);
