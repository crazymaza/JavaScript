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
let budgetValue = document.querySelectorAll('.budget-value');
let optionalValue = document.querySelectorAll('.optionalexpenses-value');
let incomeValue = document.querySelectorAll('.income-value');
let monthSavValue = document.querySelectorAll('.monthsavings-value');
let yearSavValue = document.querySelectorAll('.yearsavings-value');
let expensesItem = document.querySelectorAll('.yearsavings-value');
let submitFirst = document.querySelectorAll('button')[0];
let submitSecond = document.querySelectorAll('button')[1];
let calculate = document.querySelectorAll('button')[2];
let optionalexpItem = document.querySelectorAll('optionalexpenses-item');
let income = document.querySelector('#income');
let savings = document.querySelector('#savings');
let sum = document.querySelector('#sum');
let percent = document.querySelector('#percent');
let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');

