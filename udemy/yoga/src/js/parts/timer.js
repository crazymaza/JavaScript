function timer() {
    //===========Оживляем таймер==========
    let deadline = '2019-11-12';

    //Получаем секунды, минуты, часы до даты окончания таймера.
    const getCurrectTime = endTime => {
        let timeToD = Date.parse(endTime) - Date.parse(new Date()),
            hours = Math.floor((timeToD / (1000 * 60 * 60))),
            minutes = Math.floor((timeToD / 1000 / 60) % 60),
            seconds = Math.floor((timeToD / 1000) % 60);

        return {
            'total': timeToD,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    //Записываем в вёрстку полученные значения
    const createTimer = (id, endTime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        let timerInterval = setInterval(refreshTimer, 1000);

        function refreshTimer() {
            let t = getCurrectTime(endTime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            }
            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            }
            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            }

            if (t.total <= 0) {
                clearInterval(timerInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    createTimer('timer', deadline);
}

module.exports = timer;