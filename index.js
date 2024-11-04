const myButton1 = document.getElementById('card01');
const myButton2 = document.getElementById('card02');
const popup = document.querySelector('.card-open-all');

//const body = document.body;
//body.style.height = '100vh';
//body.style.overflowY = 'hidden';

const scrollController = { //функция для исчезновения скролла
    disabledScroll() {
        scrollController.scrollPosition = window.scrollY;
        document.body.style.cssText = `
        overflow: hidden;
        padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
    },
    enabledScroll() {
        document.body.style.cssText = '';
    },
}

myButton1.addEventListener('click', () => { //вызываем попап
    popup.classList.toggle('hidden');
    scrollController.disabledScroll();
    
})

popup.addEventListener('click', (event) => {
    if(event.target.classList.contains('card-open-all')) {
        popup.classList.toggle('hidden');
        scrollController.enabledScroll();
    }
})
