module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Speaker', [], function () {

        return {
            vdom: {
                renderer: function (ctx) {
                    var h = ctx.h;

                    return h('div.title', null, [
                        h('h1', null, 'Datadriven User Interfaces'),
                        h('h2', null, 'von Michael Büttner'),
                    ]);
                },
            },

            staticCss: {
                rules: {
                }
            },
        };
    });
};


