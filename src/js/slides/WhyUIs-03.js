module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.WhyUIs-03', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Warum sollte man sich überhaupt um die UI-Entwicklung Gedanken machen?'
            },

            children: [{
                type: 'core.entities.Text',
                state: {
                    text: 'Benutzeroberflächen müssen ständig angepasst werden.'
                    // - Konkurenz
                    // - A/B-Testing -> Änderungen müssen billig sein
                },
            }]
        };
    });
};
