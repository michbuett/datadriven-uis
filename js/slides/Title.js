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
                    renderer: function (ctx) {
                        var rules = {};

                        rules['#' + ctx.entityId] = {
                            'font-size': '55px',
                        };

                        return rules;
                    },
                }
            }, {
                type: 'core.entities.Text',

                state: {
                    text: 'Michael Büttner | International PHP Conference Berlin | 08.06.2015'
                },

                css: {
                    renderer: function (ctx) {
                        var rules = {};

                        rules['#' + ctx.entityId] = {
                            'font-size': '20px',
                        };

                        return rules;
                    },
                }
            }]
        };
    });
};

