module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.UIArchitecture-entitiesCode', [
        'slides.entities.Code',

    ], function (code) {

        // - Komponenten sind reine Daten
        // - Komponenten sind frei kombinierbar

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Was sind Entities?'
            },

            children: [code([
                '{',
                '    id: "entity-#2",',
                '',
                '    template: "box-with-text",',
                '',
                '    html: {',
                '        /* ... */',
                '    },',
                '',
                '    css: {',
                '        /* ... */',
                '    },',
                '}',
            ])],
        };
    });
};
