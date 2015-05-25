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
        'slides.AppArchitecture-01',
        'slides.AppArchitecture-02',
        'slides.AppArchitecture-03',
        'slides.AppArchitecture-04',
        'slides.AppArchitecture-05',
        'slides.AppArchitecture-06',
        'slides.AppArchitecture-07',
        'slides.UIArchitecture-01',
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

