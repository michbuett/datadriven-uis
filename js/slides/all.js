module.exports = function (alchemy) {
    'use strict';

    var slides = [
        'slides.Title',
        'slides.Speaker',
    ];

    alchemy.formula.define('slides.all', slides, function () {
        return alchemy.each(slides, function (name, index) {
            var slideComponents = alchemy(name);

            slideComponents.state = slideComponents.state || {};
            slideComponents.state.index = index;

            return slideComponents;
        });
    });
};

