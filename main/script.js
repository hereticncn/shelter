const buttonModal = document.querySelectorAll('.button-pets'); // Кнопка Learn More
const modal = document.querySelector('.card-open-all'); // Шаблон модалки
const modal1 = document.querySelector('.card-open');
const card = document.querySelector('.card');

async function getJsonMass() {
    const res = await fetch('pets.json');
    const data = await res.json();
    return data;
}

const pets = await getJsonMass();

const div = document.createElement('div');
div.classList.add('card-content-open');
const body = document.querySelector('body');
const img = document.createElement('img');
img.src = '${pet.img}';

// Добавляем обработчик для каждой кнопки
buttonModal.forEach(button => {
    button.closest('.card').addEventListener('click', (e) => {
        const petId = button.dataset.id; // Получаем значение data-id
        const pet = pets[petId]; // Достаем соответствующий объект из массива

        // Обновляем содержимое модального окна
        modal.innerHTML = `
            <div class="card-open">
                <div class="card-content-open">
                    <img class="modal_image" id="img" src="${pet.img}" alt="">
                    <div class="title-pets">
                        <div class="specialty-pets">
                            <p id="name_pets" class="name-pets">${pet.name}</p>
                            <p id="species" class="species">${pet.type} ${'-'} ${pet.breed}</p>
                        </div>
                        <p id="descriptions" class="descriptions">${pet.description}</p>
                        <ul class="characteristics-list">
                            <li id="age"><span class="bold-text">Age:</span><span class="norm-text">${pet.age}</span></li>
                            <li id="inoculations"><span class="bold-text">Inoculations:</span><span class="norm-text">${pet.inoculations}</span></li>
                            <li id="diseases"><span class="bold-text">Diseases:</span><span class="norm-text">${pet.diseases}</span></li>
                            <li id="parasites"><span class="bold-text">Parasites:</span><span class="norm-text">${pet.parasites}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="button-close">
                <button class="card-close">
                    <img src="img/vector.svg" alt="close-window">
                </button>
            </div>
        `;

        modal.classList.remove('hidden'); // Показываем модальное окно
        scrollController.disabledScroll();
    });
});

modal.addEventListener('click', (event) => {
    if(event.target.classList.contains('card-open-all')) {
        modal.classList.toggle('hidden'); // Скрываем модальное окно по нажатию в любую область
        scrollController.enabledScroll();
    }
})

modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('card-close')) {
        modal.classList.add('hidden'); // Скрываем модальное окно по кнопке
        scrollController.enabledScroll();
    }
});

const scrollController = {
    disabledScroll() {
        this.scrollPosition = window.scrollY;
        document.body.style.cssText = `
            overflow: hidden;
            padding-right: ${window.innerWidth - document.body.offsetWidth}px;
        `;
    },
    enabledScroll() {
        document.body.style.cssText = '';
        window.scrollTo(0, this.scrollPosition); // Возвращаем на предыдущую позицию скролла
    },
};