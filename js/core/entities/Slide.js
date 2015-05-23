module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.Slide', [], function () {

        return {
            globalToLocal: {
                currentIndex: 'currentIndex'
            },

            state: {
                title: '',
                index: 0,
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

            css: {
                typeRules: {
                    '.slide': {
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        display: 'table',
                        'text-align': 'center',

                        '.slide-title': {
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            'font-style': 'italic',
                            'font-size': '30px',
                        },

                        '.slide-inner': {
                            display: 'table-cell',
                            transition: 'opacity 0.3s ease-in-out',
                            'vertical-align': 'middle',
                        },
                    },
                },

                entityRules: function (state) {
                    var isActive = state.val('currentIndex') === state.val('index');
                    return {
                        '.slide-title': {
                            display: isActive ? 'block' : 'none',
                        },

                        '.slide-inner': {
                            opacity: isActive ? 1 : 0,
                        }
                    };
                }
            },
        };
    });
};
