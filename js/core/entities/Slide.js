module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.Slide', [], function () {

        return {
            vdom: {
                renderer: function (ctx) {
                    var h = ctx.h;

                    return h('div.slide', {
                        id: ctx.entityId,
                        key: ctx.entityId,
                    }, [
                        h('div.slide-inner', ctx.renderAllChildren()),
                    ]);
                },
            },

            staticCss: {
                rules: {
                    '.slide': {
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'table',
                        'text-align': 'center',
                    },

                    '.slide .slide-inner': {
                        display: 'table-cell',
                        'vertical-align': 'middle',
                    }
                }
            },
        };
    });
};


