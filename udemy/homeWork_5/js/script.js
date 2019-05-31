/*
2) Используя только файл скрипта (html руками не трогать) выполнить такие действия:

·        Восстановить порядок в меню, добавить пятый пункт

·        Заменить картинку заднего фона на другую из папки img

·        Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")

·        Удалить рекламу со страницы

·        Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
*/

let $ = document;
let menu = $.querySelectorAll('.menu-item');
console.log(menu);
let body = $.querySelector('body');
body.style.backgroundImage = "url('../img/apple_true.jpg')";
menu.forEach(function(item, i) {
    let a;
    item.style.backgroundColor = 'blue';
    if (i === 2) {
          a = item.remove();
    }
    console.log(a);
});
