let hole = function getHole(index){
  let mole =  document.getElementById(index);
  return mole;
};
let i = 0;
while (i < 10) {
  hole.onclick = function() {
    let findClass = hole.className.includes( 'hole_has-mole' );
    if(findClass){
      let dead = document.getElementById(dead).textContent += 1;
      i++;
    }else{
      let lost = document.getElementById(lost).textContent += 1;
      i++;
    }
    if(dead == 10){
        dead = 0;
    }
    if(lost == 5){
        lost = 0;

    }
  }

}

