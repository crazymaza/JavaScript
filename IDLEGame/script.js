document.addEventListener("DOMContentLoaded", () => {
    //Объявляем переменные
    let mineLvlArray = document.querySelectorAll('.allMine');
    let needForLvlArray = document.querySelectorAll('.copperLvlNeed');
    let speedPerSecondArray = document.querySelectorAll('.speedPerSecond span');
    let lvlBtnArray = document.querySelectorAll('.levelUp');
    let minePArray = document.querySelectorAll('.mineP');
    let moneyArray = document.querySelectorAll('.money');

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
    setInterval(addMoney, 1000); //1000

    //Функция в которой делаем увеличение денег на странице.
    function addMoney() {
        variables.money += variables.plusCount;
        moneyArray[0].textContent = variables.money;
        if (!(minePArray[1].classList.contains('disabled'))) {
            variables.silverMoney += variables.silverPlusCount;
            moneyArray[1].textContent = variables.silverMoney;
        }
        if (!(minePArray[2].classList.contains('disabled'))) {
            variables.goldMoney += variables.goldPlusCount;
            moneyArray[2].textContent = variables.goldMoney;
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
        if (+moneyArray[0].textContent >= +needForLvlArray[0].textContent) {
            mineLvlArray[0].textContent = ++lvl;
            variables.money -= +needForLvlArray[0].textContent;
            variables.plusCount += +mineLvlArray[0].textContent;
            needForLvlArray[0].textContent *= lvl; //lvl
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
            lvlBtnArray[1].addEventListener('click', elementChanged.bind(this, minePArray[1], lvlBtnArray[1]), true);
        }
    }

    function elementChanged(block, button) {
        block.classList.remove('disabled');
        button.removeAttribute('tabindex');
        button.textContent = 'Улучшить';
        button.style.color = 'black';
        button.style.zIndex = 0;
    }

    lvlBtnArray[1].addEventListener('click', function () {
        let lvl = +mineLvlArray[1].textContent;
        if (+moneyArray[1].textContent >= +needForLvlArray[1].textContent &&
            +moneyArray[0].textContent >= +needForLvlArray[2].textContent) {
            mineLvlArray[1].textContent = ++lvl;
            variables.silverPlusCount += +mineLvlArray[1].textContent;
            variables.silverMoney -= needForLvlArray[1].textContent;
            variables.money -= needForLvlArray[2].textContent;
            needForLvlArray[1].textContent *= lvl; //lvl
            needForLvlArray[2].textContent *= lvl; //lvl
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
            lvlBtnArray[2].addEventListener('click', elementChanged.bind(this, minePArray[2], lvlBtnArray[2]), true);
        }
    }

    lvlBtnArray[2].addEventListener('click', function () {
        let lvl = +mineLvlArray[2].textContent;
        if (+moneyArray[2].textContent >= +needForLvlArray[2].textContent &&
            +moneyArray[0].textContent >= +needForLvlArray[5].textContent &&
            +moneyArray[1].textContent >= +needForLvlArray[4].textContent) {
            mineLvlArray[2].textContent = ++lvl;
            variables.goldMoney -= needForLvlArray[3].textContent;
            variables.silverMoney -= needForLvlArray[4].textContent;
            variables.money -= needForLvlArray[5].textContent;
            variables.goldPlusCount += +mineLvlArray[2].textContent;
            needForLvlArray[3].textContent *= lvl; //lvl
            needForLvlArray[4].textContent *= lvl; //lvl
            needForLvlArray[5].textContent *= lvl; //lvl
        }
        speedPerSecondArray[2].textContent = variables.goldPlusCount;
    });
});