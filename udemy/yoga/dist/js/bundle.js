/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    //Делаем калькулятор
    let persons = document.querySelectorAll('.counter-block-input')[0];
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.getElementById('select');
    let totalValue = document.getElementById('total');
    let personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerText = 0;

    persons.addEventListener('change', function() {
        personSum = +this.value;
        total = (daysSum + personSum) * 4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerText = 0;
        } else {
            totalValue.innerText = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personSum) * 4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerText = 0;
        } else {
            totalValue.innerText = total;
        }
    });

    place.addEventListener('change', function() {
        if(persons.value == '' || restDays.value == '') {
            totalValue.innerText = 0;
        } else {
            let a = total;
            totalValue.innerText = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    //Делаем отправку формы на сервер. 
    //Всплывающее окно.
    let popUpForm = document.querySelector('.main-form'); //Получаем элементы формы.
    let popUpInput = popUpForm.getElementsByTagName('input'); //Получаем элементы формы.
    let statusText = document.createElement('div'); //Создаём элемент.

    statusText.classList.add('status'); //Присваиваем класс созданному элементу.

    let formConfirmText = { //Делаем сообщеия со статусами для пользователя.
        loading: 'Loading...',
        error: 'Всё поломалось...',
        ok: 'Данные отправились. Мы с вами свяжемся.'
    };
    /*
        //!!!============ Весь код пишем в обработчике формы ===============!!!
        popUpForm.addEventListener('submit', e => { //Делаем обработчик на форму.
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
    */
    //Контактная форма внизу страницы.
    let contactForm = document.querySelector('#form'); //Получаем данные формы.
    let contactInput = contactForm.getElementsByTagName('input'); //Получаем данные формы.
    let contactConfirm = document.createElement('div'); //Создаём элемент.

    contactConfirm.classList.add('status'); //Добавляем элементу класс.

    //!!!======= Весь код пишем в обработчике формы ==========!!!
    contactForm.addEventListener('submit', e => { //Делаем обработчик на форму.
        e.preventDefault(); //Отменяем действие по умолчанию при отправке формы.
        contactForm.insertAdjacentElement('beforeend', contactConfirm); //Добавляем элемент со статусом для пользователя.

        let request = new XMLHttpRequest(); //Создаём объект отправки.
        request.open('POST', 'server.php'); //Говорим ему как и куда мы отправляем форму.
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //Для POST запроса обязательно указывать заголовки.
        let obj = {}; //Так как несколько импутов в форме, то создаём объект в который будем складывать значения импутов.
        let a, b; //Переменные для пары ключ : значение.

        for (let i = 0; i < contactInput.length; i++) { //Делаем цикл и проходимся по всем импутам формы.
            a = contactInput[i].type; //Записываем тип поля.
            b = contactInput[i].value; //Записываем значение поля.
            obj[a] = b; //Заполняем объект.
        }

        let json = JSON.stringify(obj); //Так как объекты не передаются на сервер, переделываем его в формат JSON.

        request.send(json); //Отправляем этот JSON на сервер.

        request.addEventListener('readystatechange', () => { //Смотрим состояние запроса.
            if (request.readyState === 4 && request.status == 200) { //Если запрос доставлен без ошибок.
                contactConfirm.innerText = formConfirmText.ok; //То выводим пользователю сообщение, что всё в порядке.
            }
        });

        for (let i = 0; i < contactInput.length; i++) { //Очищаем импуты.
            contactInput[i].value = '';
        }
    });

    //Делаем отправку формы всплывающего окна с промисом.
    const sendForm = (elem) => {
        elem.addEventListener('submit', e => { //Делаем обработчик на форму.
            e.preventDefault(); //Отменяем действие по умолчанию при отправке формы.
            elem.insertAdjacentElement('beforeend', statusText); //Добавляем элемент со статусом для пользователя.

            let formData = new FormData(elem); //Создаём объект, который хранит в себе данные с формы.
            const promFunc = () => {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); //Создаём объект отправки.
                    request.open('POST', 'server.php'); //Говорим ему как и куда мы отправляем форму.
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //Для POST запроса обязательно указывать заголовки.

                    request.addEventListener('readystatechange', () => { //Смотрим состояние запроса.
                        if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    });
                    request.send(formData);
                });

            };
            const clearInput = () => {
                for (let i = 0; i < popUpInput.length; i++) { //Очищаем импут.
                    popUpInput[i].value = '';
                }
            };

            promFunc(formData)
                .then(() => statusText.innerText = formConfirmText.ok)
                .catch(() => statusText.innerText = formConfirmText.error)
                .then(clearInput);
        });
    };
    sendForm(popUpForm);
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
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
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    //Делаем слайдер
    let slideIndex = 1;
    let slides = document.querySelectorAll('.slider-item');
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    let dotsWrap = document.querySelector('.slider-dots');
    let dots = document.querySelectorAll('.dot');

    //Убираем все слайды со страницы, кроме слайда с нужным индексом.
    //Также убираем с точек класс active
    //После чего добавляем нужный слайд(index - номер слайда) и точку на страницу. 
    const showSlides = index => {
        if(index > slides.length) {
            slideIndex = 1;
        }
        if(index < 1) {
            slideIndex = slides.length;
        }
        slides.forEach(item => item.style.display = 'none');
        dots.forEach(item => item.classList.remove('dot-active'));
        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    };
    showSlides(1); 

    const plusSlides = (index) => {
        showSlides(slideIndex += index);
    };

    const curentSlide = (index) => {
        showSlides(slideIndex = index);
    };

    //Делаем переключалку на стрелочки.
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    //Делаем переключалку на стрелочки.
    next.addEventListener('click', () => {
        plusSlides(1);
    });

    //Делаем переключалку на кнопки.
    dotsWrap.addEventListener('click', (event) => {
        for(let i = 0; i < dots.length + 1; i++) {
            if(event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                curentSlide(i);
            }
        }
    });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
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
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    let calc = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");

    calc();
    form();
    slider();
    tabs();
    modal();
    timer();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map