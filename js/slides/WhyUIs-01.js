module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.WhyUIs-01', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Warum noch ein Ansatz für die Enwicklung von Obflächen?'
            },
        };
    });
};
