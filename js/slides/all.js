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
        'slides.UIArchitecture-entities',
        'slides.UIArchitecture-entitiesCode',
        'slides.UIArchitecture-entityRepo',
        'slides.UIArchitecture-systems',
        'slides.UIArchitecture-system-html',
        'slides.UIArchitecture-system-htmlCode',
        'slides.UIArchitecture-system-event',
        'slides.UIArchitecture-system-css',
        'slides.UIArchitecture-system-state',
        'slides.Testing-blank',
        'slides.Testing-systems',
        'slides.Testing-UI-01',
        'slides.Testing-UI-02',
        'slides.Testing-UI-03',
        'slides.Iceberg',
        'slides.Questions',
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

