let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let budget;

let appData = {
    needMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for (let i = 0; i < 1; i++) {
    let task = prompt("Введите обязательную статью расходов в этом месяце");
    let neededMoney = +prompt("Во сколько обойдется?");

    if (typeof (task) === 'string' && typeof (task) != null && typeof (neededMoney) != null &&
        task != '' && neededMoney != '') {
        appData.expenses[task] = neededMoney;
        
    } else {
        i--;
    }
    
}
appData.budget = appData.needMoney / 30;
alert("Ваш бюджет на день " + appData.budget);