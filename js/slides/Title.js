module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Title', [], function () {

        return {
            type: 'core.entities.Slide',

            children: [{
                type: 'core.entities.Text',

                state: {
                    text: 'Datadriven Interfaces'
                },

                css: {
                    entityRules: function () {
                        return {
                            'font-size': '65px',
                        };
                    },
                }
            }, {
                type: 'core.entities.Text',

                state: {
                    text: 'Michael Büttner | International PHP Conference Berlin | 08.06.2015'
                },

                css: {
                    entityRules: function () {
                        return {
                            'font-size': '25px',
                        };
                    },
                }
            }]
        };
    });
};

