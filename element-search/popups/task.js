let start = document.getElementById("modal_main");
if(start.classList.contains("modal")) { //ищем нужный нам div с классом  modal
    start.classList.add("modal_active"); //если нашли, то добавляем ему еще один класс
}
let x = document.getElementsByClassName("modal__close")[0];

x.onclick = function() {
    start.style.display = "none";
  }
let btn = document.getElementsByClassName("show-success")[0];
let startSuccess = document.getElementById("modal_success");
btn.onclick = function() {
  startSuccess.style.display = "block";
  start.style.display = "block";
}
