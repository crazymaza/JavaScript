window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    //=======Делаем рабочими табы на странице=======
    let infoHeader = document.querySelector('.info-header');
    let tabs = document.querySelectorAll('.info-header-tab');
    let tabInfo = document.querySelectorAll('.info-tabcontent');

    function hideContent(contentNumber) {
        for (let i = contentNumber; i < tabInfo.length; i++) {
            tabInfo[i].classList.remove('show');
            tabInfo[i].classList.add('hide');
        }
    }

    hideContent(1);

    function showContent(contentNumber) {
        if (tabInfo[contentNumber].classList.contains('hide')) {
            tabInfo[contentNumber].classList.remove('hide');
            tabInfo[contentNumber].classList.add('show');
        }
    }

    infoHeader.addEventListener('click', function (event) {
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
    let deadline = '2019-06-14';

    //Получаем секунды, минуты, часы до даты окончания таймера.
    function getCurrectTime(endTime) {
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
    function createTimer(id, endTime) {
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

    moreButton.addEventListener('click', function() {
        modalOverlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', function() { 
        modalOverlay.style.display = 'none';
        moreButton.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    tabWrapper.addEventListener('click', function(e) {
        let target = e.target;
        if(target && target.classList.contains('description-btn')) {
            for (let i = 0; i < target.length; i++) {
                if(target === tabMoreButton[i]) {
                    modalOverlay.style.display = 'block';
                    tabMoreButton[i].classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                    console.log('dfsfsdf');
                }
            }
        }
    });

});