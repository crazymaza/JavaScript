window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    //=======Делаем рабочими табы на странице=======
    let infoHeader = document.querySelector('.info-header');
    let tabs = document.querySelectorAll('.info-header-tab');
    let tabInfo = document.querySelectorAll('.info-tabcontent');

    const hideContent = contentNumber => {
        for (let i = contentNumber; i < tabInfo.length; i++) {
            tabInfo[i].classList.remove('show');
            tabInfo[i].classList.add('hide');
        }
    }

    hideContent(1);

    const showContent = contentNumber => {
        if (tabInfo[contentNumber].classList.contains('hide')) {
            tabInfo[contentNumber].classList.remove('hide');
            tabInfo[contentNumber].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', event => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    });

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

    //=====Делаем модальное окно=======
    let modalOverlay = document.querySelector('.overlay');
    let modalClose = document.querySelector('.popup-close');
    let moreButton = document.querySelector('.more');
    let tabWrapper = document.querySelector('.info');
    let tabMoreButton = document.querySelectorAll('.description-btn');

    moreButton.addEventListener('click', () => {
        modalOverlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
        moreButton.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    //Делегируем событие на обёртку
    tabWrapper.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains('description-btn')) {
            for (let i = 0; i < tabMoreButton.length; i++) {
                if (target === tabMoreButton[i]) {
                    modalOverlay.style.display = 'block';
                    tabMoreButton[i].classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                }
            }
        }
    });

    //Делаем отправку формы на сервер. 
        //Всплывающее окно.
    let popUpForm = document.querySelector('.main-form');  //Получаем элементы формы.
    let popUpInput = popUpForm.getElementsByTagName('input'); //Получаем элементы формы.
    let statusText = document.createElement('div'); //Создаём элемент.

    statusText.classList.add('status'); //Присваиваем класс созданному элементу.

    let formConfirmText = {  //Делаем сообщеия со статусами для пользователя.
        loading: 'Loading...',
        error: 'Всё поломалось...',
        ok: 'Данные отправились. Мы с вами свяжемся.'
    };

    //!!!============ Весь код пишем в обработчике формы ===============!!!
    popUpForm.addEventListener('submit', e => {  //Делаем обработчик на форму.
        e.preventDefault(); //Отменяем действие по умолчанию при отправке формы.
        popUpForm.insertAdjacentElement('beforeend', statusText); //Добавляем элемент со статусом для пользователя.


        let request = new XMLHttpRequest(); //Создаём объект отправки.
        request.open('POST', 'server.php'); //Говорим ему как и куда мы отправляем форму.
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //Для POST запроса обязательно указывать заголовки.

        let formData = new FormData(popUpForm); //Создаём объект, который хранит в себе данные с формы.
        request.send(formData); //Отправляем этот объект на сервер.

        request.addEventListener('readystatechange', () => { //Смотрим состояние запроса.
            if (request.readyState === 4 && request.status == 200) { //Если запрос доставлен без ошибок.
                statusText.innerText = formConfirmText.ok; //То выводим пользователю сообщение, что всё в порядке.
            }
        });

        for (let i = 0; i < popUpInput.length; i++) { //Очищаем импут.
            popUpInput[i].value = '';
        }
    });

    //Контактная форма внизу страницы.
    let contactForm = document.querySelector('#form'); //Получаем данные формы.
    let contactInput = contactForm.getElementsByTagName('input'); //Получаем данные формы.
    let contactConfirm = document.createElement('div'); //Создаём элемент.

    contactConfirm.classList.add('status'); //Добавляем элементу класс.

    //!!!======= Весь код пишем в обработчике формы ==========!!!
    contactForm.addEventListener('submit', e => {//Делаем обработчик на форму.
        e.preventDefault();//Отменяем действие по умолчанию при отправке формы.
        contactForm.insertAdjacentElement('beforeend', contactConfirm);//Добавляем элемент со статусом для пользователя.

        let request = new XMLHttpRequest();//Создаём объект отправки.
        request.open('POST', 'server.php');//Говорим ему как и куда мы отправляем форму.
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');//Для POST запроса обязательно указывать заголовки.
        let obj = {}; //Так как несколько импутов в форме, то создаём объект в который будем складывать значения импутов.
        let a,b; //Переменные для пары ключ : значение.

        for (let i = 0; i < contactInput.length; i++) { //Делаем цикл и проходимся по всем импутам формы.
            a = contactInput[i].type; //Записываем тип поля.
            b = contactInput[i].value; //Записываем значение поля.
            obj[a] = b; //Заполняем объект.
        }

        let json = JSON.stringify(obj); //Так как объекты не передаются на сервер, переделываем его в формат JSON.

        request.send(json); //Отправляем этот JSON на сервер.

        request.addEventListener('readystatechange', () => {//Смотрим состояние запроса.
            if (request.readyState === 4 && request.status == 200) {//Если запрос доставлен без ошибок.
                contactConfirm.innerText = formConfirmText.ok;//То выводим пользователю сообщение, что всё в порядке.
            }
        });

        for (let i = 0; i < contactInput.length; i++) { //Очищаем импуты.
            contactInput[i].value = '';
        }
    });
});