let button = document.querySelectorAll('.button');
let money = document.querySelector('.cash');
let count = 0;

button[0].disabled = true;
button[1].disabled = true;
button[2].disabled = true;

const moreThenTen = cash => {
    if(cash.textContent > 10) {
        button[0].disabled = false;
        count += 10;
    }
};
const moreThenHundred = cash => {
    if(cash.textContent > 100) {
        button[1].disabled = false;
        count += 100;
    }
};
const moreThenThousend = cash => {
    if(cash.textContent > 1000) {
        button[2].disabled = false;
        count += 1000;
    }
};

setInterval(() => {
    count++;
    money.textContent = count;
    moreThenTen(money);
    moreThenHundred(money);
    moreThenThousend(money);
},300);
