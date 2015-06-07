module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.WhyUIs-04', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Warum sollte man sich überhaupt um die UI-Entwicklung Gedanken machen?'
            },

            children: [{
                type: 'core.entities.Text',
                state: {
                    text: 'Benutzeroberflächen lassen sich nur schwer testen.'
                    // - nicht unmöglich aber immer schwierig
                    // - tagelang Selenium-tests geschrieben, die tagelang gelaufen sind
                    // - immer ein Backend benötigt dass eigentlich gar nicht interessiert
                    // - schwierig kleine Einheiten zu testen (Testdaten, Seiteneffekte)
                },
            }]
        };
    });
};
