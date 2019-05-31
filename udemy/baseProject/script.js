let money;
let time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    needMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 1; i++) {
            let task = prompt("Введите обязательную статью расходов в этом месяце");
            let neededMoney = +prompt("Во сколько обойдется?");

            if (typeof (task) == 'string' && typeof (task) != null && typeof (neededMoney) != null &&
                task != '' && neededMoney != '') {
                appData.expenses[task] = neededMoney;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.budget = (appData.needMoney / 30).toFixed();
        alert("Ваш бюджет на день " + appData.budget);
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt("Введите статью необязательных расходов №" + (i + 1));
            if (i === 1) {
                appData.optionalExpenses.first = opt;
            } else if (i === 2) {
                appData.optionalExpenses.second = opt;
            } else if (i === 3) {
                appData.optionalExpenses.third = opt;
            }
        }
    },
    checkSaving: function () {
        if (appData.savings === true) {
            let save = +prompt("Какая сумма накоплений?");
            let percent = prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("С дипозита в месяц получаем " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        for (let i = 0; i < 1; i++) {
            let addIncome = prompt("Введите через запятую статьи дополнительных доходов:");

            if (addIncome != "" && typeof (addIncome) == 'string' && typeof (addIncome) != null) {
                appData.income = addIncome.split(",");
                appData.income.forEach(function(item, i){
                    alert( (i + 1) + ". дополнительный доход: " + item);
                });
            } else {
                i--;
            }
        }
    },
    aboutProgram: function() {
        console.log("Наша программа включает в себя данные:");
        for (const key in appData) {
            if (appData.hasOwnProperty(key)) {
                 console.log(key + " : " + appData[key]);

                
                
            }
        }
    }
};