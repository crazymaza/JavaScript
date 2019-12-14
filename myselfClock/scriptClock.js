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
        hours.textContent = `0${h}`;
    }
    minutes.textContent = m;
    if (m < 10) {
        minutes.textContent = `0${m}`;
    }
    seconds.textContent = s;
    if (s < 10) {
        seconds.textContent = `0${s}`;
    }
    clock.style.boxShadow = `0 0 ${s + 10}px rgba(0, 255, 34, .5)`;
};
setInterval(timeRunner, 1000);

const timerValue = () => {
    if (+inpHours.value && inpHours.value.trim() != '' && +inpHours.value > 0) {
        timerHours.textContent = inpHours.value;
        if (+inpHours.value < 10) {
            timerHours.textContent = `0${inpHours.value}`;
        }
    } else {
        timerHours.textContent = '00';
    }
    if (+inpMinutes.value && inpMinutes.value.trim() != '' && inpMinutes.value > 0) {
        timerMinutes.textContent = inpMinutes.value;
        if (+inpMinutes.value < 10) {
            timerMinutes.textContent = `0${inpMinutes.value}`;
        }
    } else {
        timerMinutes.textContent = '00';
    }
    if (+inpSeconds.value && inpSeconds.value.trim() != '' && +inpSeconds.value > 0) {
        timerSeconds.textContent = inpSeconds.value;
        if (+inpSeconds.value < 10) {
            timerSeconds.textContent = `0${inpSeconds.value}`;
        }
    } else {
        timerSeconds.textContent = '00';
    }
};

//Делаем пересчёт введённых значений. 
/*
    Если у нас значение секунд или минут больше 59,
    то тогда делаем пересчёт в часы или минуты. 
*/
const recount = () => {
    let minutesFromSeconds = Math.floor(inpSeconds.value / 60);
    let hoursFromMinutes = Math.floor(inpMinutes.value / 60);
    if (inpSeconds.value > 59 || inpMinutes.value > 59) {
        if (minutesFromSeconds < 9 || timerMinutes.value < 9) {
            if (+inpSeconds.value != 0) {
                timerMinutes.textContent = `0${+timerMinutes.textContent + (+minutesFromSeconds)}`;
            } else {
                timerMinutes.textContent = +timerMinutes.textContent + (+minutesFromSeconds);
            }
        } else {
            timerMinutes.textContent = inpMinutes.value % 60 > 9 ? Math.floor(inpMinutes.value % 60) :
                `0${inpMinutes.value % 60}`;
        }

        if (inpSeconds.value % 60 < 10) {
            timerSeconds.textContent = `0${inpSeconds.value % 60}`;
        } else {
            timerSeconds.textContent = inpSeconds.value % 60;
        }

        if (+timerMinutes.textContent > 59 || +inpMinutes.value > 59) {
            let hoursCount = Math.floor(minutesFromSeconds / 60) + hoursFromMinutes;
            timerHours.textContent = hoursCount > 9 ? hoursCount : `0${+hoursCount + (+inpHours.value)}`;
            if (minutesFromSeconds != 0 && inpMinutes.value < 9) {
                timerMinutes.textContent = minutesFromSeconds % 60 > 9 ?
                    minutesFromSeconds % 60 : `0${minutesFromSeconds % 60}`;
            } else {
                timerMinutes.textContent = inpMinutes.value % 60 > 9 ? Math.floor(inpMinutes.value % 60) :
                    `0${inpMinutes.value % 60}`;
            }
        }
    }
};

let timerStart = setInterval(() => {
    timerSeconds.textContent--;
    if (timerSeconds.textContent == -1) {
        timerMinutes.textContent -= 1;
        timerSeconds.textContent = 59;
        if (timerMinutes.textContent < 10 && timerMinutes.textContent >= 0) {
            timerMinutes.textContent = `0${timerMinutes.textContent}`;
        }
    } else if (timerMinutes.textContent == -1) {
        timerHours.textContent -= 1;
        timerMinutes.textContent = 59;
        if (timerHours.textContent < 10 && timerHours.textContent >= 0) {
            timerHours.textContent = `0${timerHours.textContent}`;
        }
    } else if (timerHours.textContent == 0 &&
        timerMinutes.textContent == 0 &&
        timerSeconds.textContent == 0) {
        timerSeconds.textContent = '00';
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        clearInterval(timerStart);
        alert('Время вышло!');
    }
    timerSeconds.textContent = timerSeconds.textContent > 9 ? timerSeconds.textContent : `0${timerSeconds.textContent}`;
}, 1000);
// };

//Делаем обратный отсчёт.
const countdown = () => {
    //For minutes
    if (+timerSeconds.textContent === 0) {
        timerMinutes.textContent--;
        if (timerMinutes.textContent < 10) {
            timerMinutes.textContent = `0${timerMinutes.textContent}`;
        }
    }
    timerSeconds.textContent--;
    if (+timerSeconds.textContent < 0) {
        timerSeconds.textContent = 59;
    }
    if (+timerSeconds.textContent < 10) {
        timerSeconds.textContent = `0${timerSeconds.textContent}`;
    }
    //For hours
    if (+timerMinutes.textContent === 0 && +inpHours.value != 0 && +timerSeconds.textContent == 0) {
        timerMinutes.textContent = 59;
        timerSeconds.textContent = 59;
        timerHours.textContent = /*+inpHours.value > 10 ?*/ timerHours.textContent--
        /*:
                   `0${timerHours.textContent}`*/
        ;
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
    recount();
    timerStart;
});

closeButton.addEventListener('click', () => {
    timerInputs.style.display = 'none';
    setButton.style.display = 'block';
});