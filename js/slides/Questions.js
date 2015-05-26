module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Questions', [], function () {

        return {
            type: 'core.entities.Slide',

            children: [{
                type: 'core.entities.Text',

                state: {
                    text: 'Fragen?'
                },

                css: {
                    entityRules: function () {
                        return {
                            'font-size': '65px',
                        };
                    },
                }
            }]
        };
    });
};

