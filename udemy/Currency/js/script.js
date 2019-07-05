let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

// inputRub.addEventListener('input', () => {



//     let request = new XMLHttpRequest();

//     request.open('GET', 'js/current.json');
//     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     request.send();

//     request.addEventListener('readystatechange', function () {
//         if (request.readyState === 4 && request.status == 200) {
//             let data = JSON.parse(request.response);

//             inputUsd.value = inputRub.value / data.usd;
//         } else {
//             inputUsd.value = "Что-то пошло не так!";
//         }
//     });
// });

const startConverter = (elemRUB) => {
    elemRUB.addEventListener('input', () => {
        let data;
        const promFunc = () => {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('GET', 'js/current.json');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', function () {
                    if (request.readyState === 4 && request.status == 200) {
                        data = JSON.parse(request.response);
                        resolve();
                    } else {
                        reject();
                    }
                });
                request.send();
            });
        };

        promFunc(elemRUB)
                .then(() =>  inputUsd.value = this.value / data.usd)
                .catch(() => inputUsd.value = "Что-то пошло не так!");
    });
};

startConverter(inputRub);