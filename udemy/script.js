let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let task = prompt("Введите обязательную статью расходов в этом месяце");
let neededMoney = prompt("Во сколько обойдется?");
let budget;

let appData = {
   needMoney: money,
   timeData: time,
   expenses: {
      task: neededMoney,
   },
   optionalExpenses: {},
   income: [],
   savings: false,
};

appData.expenses.task = task;
appData.expenses.neededMoney = neededMoney;

budget = (money - appData.expenses.task) / 30;
alert("Ваш бюджет на день " + budget.toFixed(2));