/*2) Задание по проекту

·    +    Получить кнопку "Начать расчет" через id 

·    +    Получить все блоки в правой части программы через классы (которые имеют класс название-value,
            начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

·    +    Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

·    +    Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

·    +    Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи
            querySelectorAll

·        Получить оставшиеся поля через querySelector (статьи возможного дохода, 
            чекбокс, сумма, процент, год, месяц, день)
*/

let start = document.querySelector('#start');
let resultTableValue = document.querySelectorAll('.result-table div:nth-child(2n)');
let budgetValue = document.querySelectorAll('.budget-value');
let expenses = document.querySelectorAll('.expenses-item');
let optionalValue = document.querySelectorAll('.optionalexpenses-value');
let incomeValue = document.querySelectorAll('.income-value');
let monthSavValue = document.querySelectorAll('.monthsavings-value');
let yearSavValue = document.querySelectorAll('.yearsavings-value');
let submitFirst = document.querySelectorAll('button')[0];
let submitSecond = document.querySelectorAll('button')[1];
let calculate = document.querySelectorAll('button')[2];
let optionalexpItem = document.querySelectorAll('.optionalexpenses-item');
let income = document.querySelector('#income');
let savings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');
let label = document.querySelectorAll('label');
let money;
let time;
let sumExpenses = 0;

sum.style.visibility = 'hidden';
percent.style.visibility = 'hidden';
label[0].style.visibility = 'hidden';
label[1].style.visibility = 'hidden';

let appData = {
    needMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

//Обработчик событий на кнопку "Начать расчёт".
start.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.timeData = time;
    appData.needMoney = money;

    budgetValue[0].textContent = money;
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});

//Обработчик на кнопку "Утвердить" в обязательных расходах.
submitFirst.addEventListener('click', function () {

    for (let i = 0; i < expenses.length; i++) {
        let task = expenses[i].value;
        let neededMoney = expenses[++i].value;

        if (typeof (task) == 'string' && typeof (task) != null && typeof (neededMoney) != null &&
            task != '' && neededMoney != '') {
            appData.expenses[task] = neededMoney;
            sumExpenses += +neededMoney;
        } else {
            i--;
        }
        resultTableValue[3].textContent = sumExpenses.toFixed(2);
    }
});

//Обработчик на кнопку "Утвердить" в необязательных расходах.
submitSecond.addEventListener('click', function () {
    for (let i = 0; i < optionalexpItem.length; i++) {
        let opt = optionalexpItem[i].value;
        appData.optionalExpenses[i] = opt;
        resultTableValue[4].textContent += appData.optionalExpenses[i] + ' ';
    }
});

//Обработчик на кнопку расчёта дневного бюджета.
calculate.addEventListener('click', function () {
    if (appData.needMoney != undefined) {
        appData.budget = ((appData.needMoney - sumExpenses) / 30).toFixed(2);
        resultTableValue[1].textContent = appData.budget;
    } else {
        resultTableValue[1].textContent = 'Произошла ошибка!';
    }
});

//Обработчик инпута дополнительных статей дохода.
income.addEventListener('input', function () {
    let addIncome = income.value;
    if (addIncome != "" && typeof (addIncome) == 'string' && typeof (addIncome) != null) {
        appData.income = addIncome.split(",");
        resultTableValue[5].textContent = appData.income;
    }
});

//Обработчик для чекбокса.
savings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
        sum.style.visibility = 'hidden';
        percent.style.visibility = 'hidden';
        label[0].style.visibility = 'hidden';
        label[1].style.visibility = 'hidden';
    } else {
        appData.savings = true;
        sum.style.opacity = 1;
        percent.style.opacity = 1;
        sum.style.visibility = 'visible';
        percent.style.visibility = 'visible';
        label[0].style.visibility = 'visible';
        label[1].style.visibility = 'visible';
    }
});

//Обработчик для поля ввода суммы накоплений.
sum.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumValue = sum.value,
            percentValue = percent.value;

        appData.monthIncome = sumValue / 100 / 12 * percentValue;
        appData.yearIncome = sumValue / 100 * percentValue;
        resultTableValue[6].textContent = appData.monthIncome.toFixed(2);
        resultTableValue[7].textContent = appData.yearIncome.toFixed(2);
    }
});

//Обработчкик для поля ввода процентов накоплений.
percent.addEventListener('input', function () {
    if (appData.savings == true) {
        let sumValue = sum.value,
            percentValue = percent.value;

        appData.monthIncome = sumValue / 100 / 12 * percentValue;
        appData.yearIncome = sumValue / 100 * percentValue;
        resultTableValue[6].textContent = appData.monthIncome.toFixed(2);
        resultTableValue[7].textContent = appData.yearIncome.toFixed(2);
    }
});