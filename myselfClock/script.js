//Все нужные элементы страницы.
const clock = document.querySelector('.clock'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    setButton = document.querySelector('.create-timer-button'),
    timerInputs = document.querySelector('.timer-input'),
    okButton = document.querySelector('.ok'),
    closeButton = document.querySelector('.close'),
    timer = document.querySelector('.timer');

//Делаем тень для часов.
//"Оживляем" время.
const timeRunner = () => {
    let h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();
    hours.textContent = h;
    if (h < 10) {
        hours.textContent = "0" + h;
    }
    minutes.textContent = m;
    if (m < 10) {
        minutes.textContent = "0" + m;
    }
    seconds.textContent = s;
    if (s < 10) {
        seconds.textContent = "0" + s;
    }
    clock.style.boxShadow = `0 0 ${s}px rgb(0, 255, 34)`;
};
setInterval(timeRunner, 1000);

//Добавляем обработчики событий.
setButton.addEventListener('click', () => {
    setButton.style.display = 'none';
    timerInputs.style.display = 'block';
});

okButton.addEventListener('click', () => {
    timerInputs.style.display = 'none';
    timer.style.display = 'block';
});
closeButton.addEventListener('click', () => {
    timerInputs.style.display = 'none';
    setButton.style.display = 'block';
});