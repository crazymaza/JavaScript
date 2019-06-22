let button = document.querySelectorAll('.button');
let money = document.querySelectorAll('.cash');
let buyButton = document.querySelector('.buyButton');
let wrapper = document.querySelectorAll('.wrapper');
let total = document.querySelector('.allCahs_total');
let count1 = 0;
let coun2 = 0;

button.forEach(element => {
    element.disabled = true;
});

// const moreThenCash =(cash) => {
//     // let count = 1;
//     const inner = () => {
//         if(cash.textContent > 10) {
//             button[0].disabled = false;
//             count += 5;
//         }
//         if(cash.textContent > 100) {
//             button[1].disabled = false;
//             count += 10;
//         }
//         if(cash.textContent > 1000) {
//             button[2].disabled = false;
//             count += 15;
//         }
//         return count++;
//     }
//     inner();
//     return count;
// };

buyButton.addEventListener('click', () => {
    buyButton.classList.add('noVision');
    wrapper[1].classList.remove('notOpen');
    setInterval(() => {
        money[1].textContent = new Money().moreThenCash(money[1]);
    }, 1000)
});

// setInterval(() => {
//     money[0].textContent = moreThenCash(money[0]);
// },300);

class Money {
    constructor() { }
    moreThenCash = (cash) => {
        const inner = () => {
            if (cash.textContent > 10) {
                button.disabled = false;
                count1 += 5;
            }
            if (cash.textContent > 100) {
                button[1].disabled = false;
                count1 += 10;
            }
            if (cash.textContent > 1000) {
                button[2].disabled = false;
                count1 += 15;
            }
            return count1++;
        }
        inner();
        return count1;
    };
}
setInterval(() => {
    money[0].textContent = new Money().moreThenCash(money[0]);
}, 300)


