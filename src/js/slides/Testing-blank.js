module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Testing-blank', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Testing'
            },
        };
    });
};
