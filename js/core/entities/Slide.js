module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.Slide', [], function () {

        return {

            state: {
                title: '',
            },

            vdom: {
                renderer: function (ctx) {
                    var h = ctx.h;


                    return h('div.slide', {
                        id: ctx.entityId,
                        key: ctx.entityId,
                    }, [
                        h('div.slide-title', ctx.state.val('title')),
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

                    '.slide .slide-title': {
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        'font-size': '30px',
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


