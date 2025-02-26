const buttonModal = document.querySelectorAll('.button-pets'); // Кнопка Learn More
const modal = document.querySelector('.card-open-all'); // Шаблон модалки
const modal1 = document.querySelector('.card-open');
const card = document.querySelector('.card');

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

// слайдер

const product = document.querySelectorAll('.pets-content .card')
let counter = 0;

function left (){
    if(screenWidth > 1200){
        if(counter == 0){
            counter = product.length / 2 - 1
        }else{
            counter--
        }
    }else if(screenWidth < 780){
        if(counter == 0){
            counter = product.length - 2 
        }else{
            counter--
        }
    }else{
        if(counter == 0){
            counter = product.length / 1 - 3
        }else{
            counter--
        }
    }
    scroll()
}

function right(){
    if(screenWidth > 1200){
        if(counter == product.length / 2 - 1){
            counter = 0
        }else{
            counter++
        }
    }else if(screenWidth < 780){
        console.log(product.length)
        if(counter == product.length - 2){
            counter = 0
        }else{
            counter++
        }
    }else{
        if(counter == product.length / 1 - 3){
            counter = 0
        }else{
            counter++
        }
    }
    scroll()
}

function scroll(){
    if(screenWidth > 1200){
        product.forEach(function(item) {
            item.style.transform = `translateX(-${counter * 720}px)`
        })
    }else{
        product.forEach(function(item) {
            item.style.transform = `translateX(-${counter * 310}px)`
        })
    }
}








