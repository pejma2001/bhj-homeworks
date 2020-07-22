let sec = function(){
    let currentSec = document.getElementById("clicker__counter");
    let picture = document.getElementById("cookie");
    picture.onclick = function() {
       currentSec.textContent += 1;

       picture.width += 200;
       picture.height += 200;

       picture.onclick = null;

       picture.width -= 200;
       picture.height -= 200;
    }



}
setInterval(sec, 1000);