module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.WhyUIs-05', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Warum noch ein Ansatz für die Enwicklung von Obflächen?'
            },

            children: [{
                type: 'core.entities.Text',
                state: {
                    text: 'Die existierenden Lösungen sind unzureichend.'
                    // - data-bound-views werden schnell unhandlich
                    // - jeder ist schonmal an MVC gescheitert
                    // - MVC/FRP schwierig umzusetzten
                },
            }]
        };
    });
};
