module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.UIArchitecture-system-htmlCode', [
        'slides.entities.Code',

    ], function (code) {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'HTML-System'
            },

            children: [code([
                '{',
                '    /* ... */',
                '',
                '    html: {',
                '        root: "#user-info",',
                '',
                '        renderer: function (h, entityId, state) {',
                '            return h("div", {',
                '                id: entityId,',
                '                className: "user-name",',
                '            }, state.firstName + " " + state.lastName);',
                '        },',
                '    }',
                '',
                '    /* ... */',
                '}',
            ])],
        };
    });
};
