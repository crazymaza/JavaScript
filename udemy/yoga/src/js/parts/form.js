function form() {
    //Делаем отправку формы на сервер. 
    //Всплывающее окно.
    let popUpForm = document.querySelector('.main-form'); //Получаем элементы формы.
    let popUpInput = popUpForm.getElementsByTagName('input'); //Получаем элементы формы.
    let statusText = document.createElement('div'); //Создаём элемент.

    statusText.classList.add('status'); //Присваиваем класс созданному элементу.

    let formConfirmText = { //Делаем сообщеия со статусами для пользователя.
        loading: 'Loading...',
        error: 'Всё поломалось...',
        ok: 'Данные отправились. Мы с вами свяжемся.'
    };
    /*
        //!!!============ Весь код пишем в обработчике формы ===============!!!
        popUpForm.addEventListener('submit', e => { //Делаем обработчик на форму.
            e.preventDefault(); //Отменяем действие по умолчанию при отправке формы.
            popUpForm.insertAdjacentElement('beforeend', statusText); //Добавляем элемент со статусом для пользователя.


            let request = new XMLHttpRequest(); //Создаём объект отправки.
            request.open('POST', 'server.php'); //Говорим ему как и куда мы отправляем форму.
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); //Для POST запроса обязательно указывать заголовки.

            let formData = new FormData(popUpForm); //Создаём объект, который хранит в себе данные с формы.
            request.send(formData); //Отправляем этот объект на сервер.

            request.addEventListener('readystatechange', () => { //Смотрим состояние запроса.
                if (request.readyState === 4 && request.status == 200) { //Если запрос доставлен без ошибок.
                    statusText.innerText = formConfirmText.ok; //То выводим пользователю сообщение, что всё в порядке.
                }
            });

            for (let i = 0; i < popUpInput.length; i++) { //Очищаем импут.
                popUpInput[i].value = '';
            }
        });
    */
    //Контактная форма внизу страницы.
    let contactForm = document.querySelector('#form'); //Получаем данные формы.
    let contactInput = contactForm.getElementsByTagName('input'); //Получаем данные формы.
    let contactConfirm = document.createElement('div'); //Создаём элемент.

    contactConfirm.classList.add('status'); //Добавляем элементу класс.

    //!!!======= Весь код пишем в обработчике формы ==========!!!
    contactForm.addEventListener('submit', e => { //Делаем обработчик на форму.
        e.preventDefault(); //Отменяем действие по умолчанию при отправке формы.
        contactForm.insertAdjacentElement('beforeend', contactConfirm); //Добавляем элемент со статусом для пользователя.

        let request = new XMLHttpRequest(); //Создаём объект отправки.
        request.open('POST', 'server.php'); //Говорим ему как и куда мы отправляем форму.
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //Для POST запроса обязательно указывать заголовки.
        let obj = {}; //Так как несколько импутов в форме, то создаём объект в который будем складывать значения импутов.
        let a, b; //Переменные для пары ключ : значение.

        for (let i = 0; i < contactInput.length; i++) { //Делаем цикл и проходимся по всем импутам формы.
            a = contactInput[i].type; //Записываем тип поля.
            b = contactInput[i].value; //Записываем значение поля.
            obj[a] = b; //Заполняем объект.
        }

        let json = JSON.stringify(obj); //Так как объекты не передаются на сервер, переделываем его в формат JSON.

        request.send(json); //Отправляем этот JSON на сервер.

        request.addEventListener('readystatechange', () => { //Смотрим состояние запроса.
            if (request.readyState === 4 && request.status == 200) { //Если запрос доставлен без ошибок.
                contactConfirm.innerText = formConfirmText.ok; //То выводим пользователю сообщение, что всё в порядке.
            }
        });

        for (let i = 0; i < contactInput.length; i++) { //Очищаем импуты.
            contactInput[i].value = '';
        }
    });

    //Делаем отправку формы всплывающего окна с промисом.
    const sendForm = (elem) => {
        elem.addEventListener('submit', e => { //Делаем обработчик на форму.
            e.preventDefault(); //Отменяем действие по умолчанию при отправке формы.
            elem.insertAdjacentElement('beforeend', statusText); //Добавляем элемент со статусом для пользователя.

            let formData = new FormData(elem); //Создаём объект, который хранит в себе данные с формы.
            const promFunc = () => {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); //Создаём объект отправки.
                    request.open('POST', 'server.php'); //Говорим ему как и куда мы отправляем форму.
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8'); //Для POST запроса обязательно указывать заголовки.

                    request.addEventListener('readystatechange', () => { //Смотрим состояние запроса.
                        if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                resolve();
                            } else {
                                reject();
                            }
                        }
                    });
                    request.send(formData);
                });

            };
            const clearInput = () => {
                for (let i = 0; i < popUpInput.length; i++) { //Очищаем импут.
                    popUpInput[i].value = '';
                }
            };

            promFunc(formData)
                .then(() => statusText.innerText = formConfirmText.ok)
                .catch(() => statusText.innerText = formConfirmText.error)
                .then(clearInput);
        });
    };
    sendForm(popUpForm);
}

module.exports = form;