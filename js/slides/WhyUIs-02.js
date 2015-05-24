module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.WhyUIs-02', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Warum noch ein Ansatz für die Enwicklung von Obflächen?'
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
