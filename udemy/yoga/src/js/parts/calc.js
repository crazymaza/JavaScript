function calc() {
    //Делаем калькулятор
    let persons = document.querySelectorAll('.counter-block-input')[0];
    let restDays = document.querySelectorAll('.counter-block-input')[1];
    let place = document.getElementById('select');
    let totalValue = document.getElementById('total');
    let personSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerText = 0;

    persons.addEventListener('change', function() {
        personSum = +this.value;
        total = (daysSum + personSum) * 4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerText = 0;
        } else {
            totalValue.innerText = total;
        }
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum + personSum) * 4000;

        if(restDays.value == '' || persons.value == '') {
            totalValue.innerText = 0;
        } else {
            totalValue.innerText = total;
        }
    });

    place.addEventListener('change', function() {
        if(persons.value == '' || restDays.value == '') {
            totalValue.innerText = 0;
        } else {
            let a = total;
            totalValue.innerText = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;