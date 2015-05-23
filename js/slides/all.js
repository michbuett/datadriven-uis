module.exports = function (alchemy) {
    'use strict';

    var slides = [
        'slides.Title',
        'slides.Speaker',
        'slides.WhyUIs-01',
        'slides.WhyUIs-02',
        'slides.WhyUIs-03',
        'slides.WhyUIs-04',
        'slides.WhyUIs-05',
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

