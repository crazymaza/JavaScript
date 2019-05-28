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
};

function chooseExpenses() {
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
}
chooseExpenses();

function detectDayBudget() {
    appData.budget = (appData.needMoney / 30).toFixed();
    alert("Ваш бюджет на день " + appData.budget);
}
detectDayBudget();

function chooseOptExpenses() {
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
}
chooseOptExpenses();

function checkSaving() {
    if (appData.savings === true) {
        let save = +prompt("Какая сумма накоплений?");
        let percent = prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("С дипозита в месяц получаем " + appData.monthIncome);
    }
}
checkSaving();