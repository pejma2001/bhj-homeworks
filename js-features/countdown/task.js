

/*let sec = function(){
    let currentSec = document.getElementById("timer");

    currentSec.textContent -= 1;
    if(currentSec.textContent == 0){
        clearInterval(currentSec.textContent);
        alert("«Вы победили в конкурсе!»");
    }
}
setInterval(sec, 1000);
*/

let sec = document.getElementById("timer").textContent;
let min = 00;
let hours = 00;


function refresh()
{
	sec--;
    if(sec == -01) {
        sec = 59;
        min = min - 1;
    }
	else if(sec == -01 & min == -01){
        sec = 59;
        min = min - 1;
        hours = hours - 1;
    }else{
        min = min;
        hours = hours;
    }
	if(sec <= 9){
        sec = "0" + sec;
    }
	time = (hours <= 9 ? "0" + hours : hours) + ":" + (min <= 9 ? "0" + min : min) + ":" + sec;
	if(document.getElementById){
        timer.innerHTML = time;
    }
	inter = setTimeout("refresh()", 1000);

	if(hours == '00' && min=='00' && sec=='00'){
		sec="00";
		clearInterval(inter);
        let down = document.getElementById("download");
        down.click();
	}
}


