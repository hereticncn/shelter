const burger = document.querySelector('.burger');
const BODY = document.querySelector('body');
let nav = document.querySelector('.nav');



burger.addEventListener('click', function(){
    nav.classList.toggle('nav__active');
    burger.classList.toggle('burger__active');
})
