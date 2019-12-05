//Все нужные элементы страницы.
const clock = document.querySelector('.clock'),
    hours = document.querySelector('.hours'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    setButton = document.querySelector('.create-timer-button'),
    timerInputs = document.querySelector('.timer-input'),
    okButton = document.querySelector('.ok'),
    closeButton = document.querySelector('.close'),
    timer = document.querySelector('.timer'),
    inpHours = document.querySelector('.inp-hours'),
    inpMinutes = document.querySelector('.inp-minutes'),
    inpSeconds = document.querySelector('.inp-seconds'),
    timerHours = document.querySelector('.timer-hours'),
    timerMinutes = document.querySelector('.timer-minutes'),
    timerSeconds = document.querySelector('.timer-seconds');


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
    // let a = 0;
    // if(s % 10 == 0) {
    //     clock.style.boxShadow = `0 0 40px rgba(0, 255, 34, .${a++})`;
    // } else {
    //     a = 0;
    // }
    clock.style.boxShadow = `0 0 ${s + 10}px rgba(0, 255, 34, .5)`;
};
setInterval(timeRunner, 1000);

const timerValue = () => {
    if(+inpHours.value && inpHours.value.trim() != '') {
        timerHours.textContent = inpHours.value;
    } else {
        timerHours.textContent = '00';
    }
    if(+inpMinutes.value && inpMinutes.value.trim() != '') {
        timerMinutes.textContent = inpMinutes.value;
    } else {
        timerMinutes.textContent = '00';
    }
    if(+inpSeconds.value && inpSeconds.value.trim() != '') {
        timerSeconds.textContent =  inpSeconds.value;
    } else {
        timerSeconds.textContent = '00';
    }
    

};

//Добавляем обработчики событий.
setButton.addEventListener('click', () => {
    setButton.style.display = 'none';
    timerInputs.style.display = 'block';
});

okButton.addEventListener('click', () => {
    timerInputs.style.display = 'none';
    timer.style.display = 'block';
    timerValue();
});
closeButton.addEventListener('click', () => {
    timerInputs.style.display = 'none';
    setButton.style.display = 'block';
});

