// 2) Используя синтаксис ES6 в отдельном документе:

// ·        Создать класс options

// ·        Он должен содержать свойства: height, width, bg, fontSize, textAlign

// ·        Он должен содержать метод, создающий новый div на странице, записывающий в него любой
//          текст и при помощи cssText изменять свой стиль из переданных параметров

// ·        Создать новый объект через класс

// ·        Вызвать его метод и получить элемент на странице

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let wrapper = document.querySelector('.wrapper');
        let color = document.querySelector('#color');
        let background = document.querySelector('#background');
        let size = document.querySelector('#size');
        let div = document.createElement('div');
        div.textContent = 'Some text';
        
        wrapper.insertAdjacentElement('beforeend', div);

        color.addEventListener('input', () => {
            div.style.color = color.value;
        });

        background.addEventListener('input', () => {
            div.style.backgroundColor = background.value;
        });

        size.addEventListener('input', () => {
            div.style.fontSize = size.value + 'px';
        });
    }
}

let opt = new Options(50,50,'orange', 20, 'center');
opt.createDiv();