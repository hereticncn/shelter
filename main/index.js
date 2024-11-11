const buttonModal = document.querySelectorAll('.button-pets'); // Кнопка Learn More
const modal = document.querySelector('.card-open-all'); // Шаблон модалки
const modal1 = document.querySelector('.card-open');
const card = document.querySelector('.card');


// слайдер

const product = document.querySelectorAll('.pets-content .card')
let counter = 0;

function left (){
    if(counter == 0){
        counter = product.length / 2 - 2
    }else{
        counter--
    }
    scroll()
}

function right(){
    if(counter == product.length / 2 - 2){
        counter = 0
    }else

        counter++
        scroll()
    
}

function scroll(){
    product.forEach(function(item) {
        item.style.transform = `translateX(-${counter * 720}px)`
    })
    
}









