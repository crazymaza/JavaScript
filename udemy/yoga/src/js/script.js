window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    let calc = require('./parts/calc'),
        form = require('./parts/form'),
        slider = require('./parts/slider'),
        tabs = require('./parts/tabs'),
        modal = require('./parts/modal'),
        timer = require('./parts/timer');

    calc();
    form();
    slider();
    tabs();
    modal();
    timer();

});