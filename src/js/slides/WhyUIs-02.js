module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.WhyUIs-02', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Warum sollte man sich überhaupt um die UI-Entwicklung Gedanken machen?'
            },

            children: [{
                type: 'core.entities.Text',
                state: {
                    text: 'Die Entwicklung von Benutzeroberflächen ist anspruchsvoll.'
                    // - anspruchsvoller als backend
                    // - meist nur CRUD mit Zugriffsrechten
                    // - animationen, asynchronität, unterschiedliche Plattformen/Endgräte
                    // - pixel-genaue Umsetzung
                    // - neue Endgeräte -> neue Bedienkonzepte
                },
            }]
        };
    });
};
