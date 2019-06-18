/*
2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:

·        Восстановить порядок в меню, добавить пятый пункт

·        Заменить картинку заднего фона на другую из папки img

·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

·        Удалить рекламу со страницы

·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
*/

let $ = document;
let menuItem = $.querySelectorAll('.menu-item');
let menu = $.querySelector('.menu');
let reklama = $.querySelector('.adv');
let title = $.querySelector('#title');
let promptText = $.querySelector('#prompt');

title.textContent = 'Мы продаем только подлинную технику Apple';

reklama.remove();

menu.insertBefore(menuItem[2], menuItem[1]);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

let fiveElement = $.createElement('li');
fiveElement.classList.add('menu-item');
fiveElement.textContent = 'Пятый элемент';
menu.appendChild(fiveElement);

function aaaa() {
    promptText.textContent = prompt('Как вы относитесь к технике Apple?')
}
    
setTimeout(aaaa, 3000);
