module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.WhyUIs-05', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Warum sollte man sich überhaupt um die UI-Entwicklung Gedanken machen?'
            },

            children: [{
                type: 'core.entities.Text',
                state: {
                    text: 'Die existierenden Lösungen sind unzureichend.'
                    // - Bei serverseitig erzeugte UIs gibt es Probleme mit unterschiedlichen Endgeräten
                    // - data-bound-views werden schnell unhandlich
                    // - jeder ist schonmal an MVC gescheitert
                    // - MVC/FRP schwierig umzusetzten
                },
            }]
        };
    });
};
