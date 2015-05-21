module.exports = function (alchemy) {
    'use strict';

    var slides = [
        'slides.Title',
        'slides.Speaker',
    ];

    alchemy.formula.define('slides.all', slides, function () {
        return alchemy.each(slides, function (name) {
            return alchemy(name);
        });
    });
};

