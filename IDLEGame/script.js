document.addEventListener("DOMContentLoaded", () => {
    //Объявляем переменные
    let mineLvlArray = document.querySelectorAll('.allMine');
    let needForLvlArray = document.querySelectorAll('.copperLvlNeed');
    let speedPerSecondArray = document.querySelectorAll('.speedPerSecond span');
    let lvlBtnArray = document.querySelectorAll('.levelUp');
    let minePArray = document.querySelectorAll('.mineP');
    let moneyArray = document.querySelectorAll('.money');
    let progressBarArray = document.querySelectorAll('progress');
    let currentMoney = document.querySelectorAll('.currentMoney');

    //Необходимые значения для "развития".
    let variables = {
        money: 0,
        plusCount: 1,
        needToLvl: 10,
        silverMoney: 0,
        silverPlusCount: 1,
        goldMoney: 0,
        goldPlusCount: 1,
    };

    //Делаем интервал изменения значений.
    setInterval(addMoney, 1); //1000

    //Функция в которой делаем увеличение денег на странице.
    function addMoney() {
        variables.money += variables.plusCount;
        progressBarArray[0].setAttribute('value', variables.money);
        progressBarArray[0].setAttribute('max', needForLvlArray[0].textContent);
        currentMoney[0].textContent = variables.money;
        buttonActivated(lvlBtnArray[0], progressBarArray[0], needForLvlArray[0]);
        if (!(minePArray[1].classList.contains('disabled'))) {
            variables.silverMoney += variables.silverPlusCount;
            progressBarArray[1].setAttribute('value', variables.silverMoney);
            progressBarArray[1].setAttribute('max', needForLvlArray[1].textContent);
            currentMoney[1].textContent = variables.silverMoney;
            buttonActivated(lvlBtnArray[1], progressBarArray[1], needForLvlArray[1]);
        }
        if (!(minePArray[2].classList.contains('disabled'))) {
            variables.goldMoney += variables.goldPlusCount;
            progressBarArray[2].setAttribute('value', variables.goldMoney);
            progressBarArray[2].setAttribute('max', needForLvlArray[3].textContent);
            currentMoney[2].textContent = variables.goldMoney;
            buttonActivated(lvlBtnArray[2], progressBarArray[2], needForLvlArray[3]);
        }
        
    }

    /*  Добавляем обработчик на первую кнопку.
        Если у нас набралась нужная сумма,
        то шахта будет улучшена на 1 уровень.
        Если набрался нужный уровень шахты,
        то будет доступна возможность
        открыть серебрянную шахту.
    */
    lvlBtnArray[0].addEventListener('click', function () {
        let lvl = +mineLvlArray[0].textContent;
        if (+progressBarArray[0].getAttribute('value') >= +needForLvlArray[0].textContent) {
            mineLvlArray[0].textContent = ++lvl;
            variables.money -= +needForLvlArray[0].textContent;
            variables.plusCount += +mineLvlArray[0].textContent;
            needForLvlArray[0].textContent *= 2; //lvl
        }
        speedPerSecondArray[0].textContent = variables.plusCount;
        openSilverMine();
    });

    //Silver
    function openSilverMine() {
        if (mineLvlArray[0].textContent === '10') {
            lvlBtnArray[1].style.zIndex = 10;
            lvlBtnArray[1].textContent = 'Открыть';
            lvlBtnArray[1].style.color = 'white';
            lvlBtnArray[1].removeAttribute('disabled');
            lvlBtnArray[1].addEventListener('click',
                elementChanged.bind(this, minePArray[1], lvlBtnArray[1]), true);
        }
    }

    lvlBtnArray[1].addEventListener('click', function () {
        let lvl = +mineLvlArray[1].textContent;
        if (+progressBarArray[1].getAttribute('value') >= +needForLvlArray[1].textContent &&
            +progressBarArray[0].getAttribute('value') >= +needForLvlArray[2].textContent) {
            mineLvlArray[1].textContent = ++lvl;
            variables.silverPlusCount += +mineLvlArray[1].textContent;
            variables.silverMoney -= needForLvlArray[1].textContent;
            variables.money -= needForLvlArray[2].textContent;
            needForLvlArray[1].textContent *= 2; //lvl
            needForLvlArray[2].textContent *= 2; //lvl
        }
        speedPerSecondArray[1].textContent = variables.silverPlusCount;
        openGoldMine();
    });

    //Gold
    function openGoldMine() {
        if (mineLvlArray[1].textContent === '10') {
            lvlBtnArray[2].style.zIndex = 10;
            lvlBtnArray[2].textContent = 'Открыть';
            lvlBtnArray[2].style.color = 'white';
            lvlBtnArray[2].removeAttribute('disabled');
            lvlBtnArray[2].addEventListener('click',
                elementChanged.bind(this, minePArray[2], lvlBtnArray[2]), true);
        }
    }

    lvlBtnArray[2].addEventListener('click', function () {
        let lvl = +mineLvlArray[2].textContent;
        if (+progressBarArray[2].getAttribute('value') >= +needForLvlArray[3].textContent &&
            +progressBarArray[1].getAttribute('value') >= +needForLvlArray[5].textContent &&
            +progressBarArray[0].getAttribute('value') >= +needForLvlArray[4].textContent) {
            mineLvlArray[2].textContent = ++lvl;
            variables.goldMoney -= needForLvlArray[3].textContent;
            variables.silverMoney -= needForLvlArray[4].textContent;
            variables.money -= needForLvlArray[5].textContent;
            variables.goldPlusCount += +mineLvlArray[2].textContent;
            needForLvlArray[3].textContent *= 2; //lvl
            needForLvlArray[4].textContent *= 2; //lvl
            needForLvlArray[5].textContent *= 2; //lvl
        }
        speedPerSecondArray[2].textContent = variables.goldPlusCount;
    });

    function elementChanged(block, button) {
        block.classList.remove('disabled');
        button.removeAttribute('tabindex');
        button.textContent = 'Улучшить';
        button.style.color = 'black';
        button.style.zIndex = 0;
    }

    //Функция активации кнопки.
    function buttonActivated(lvl, progress, need) {
        if (lvl.hasAttribute('disabled') &&
            +progress.getAttribute('value') >=
            +need.textContent) {
                lvl.removeAttribute('disabled');
                lvl.style.backgroundColor = 'green';
        } else if (!(lvl.hasAttribute('disabled')) &&
            +progress.getAttribute('value') <
            +need.textContent) {
                lvl.setAttribute('disabled', true);
                lvl.style.backgroundColor = 'transparent';
        }
    }

    
});