let links = document.querySelectorAll("a.menu__link");
let arr = Array.from(links);



let elem = document.querySelector('a.menu__link');
let parent = elem.closest('.menu');
if(parent){
    parent.classList.add("menu_active");
}