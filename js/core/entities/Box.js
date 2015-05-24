module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.Box', [], function () {

        return {

            state: {
                title: '',
                x: 0,
                y: 0,
                w: 100,
                h: 100,
            },

            vdom: {
                renderer: function (ctx) {
                    return ctx.h('div.box', {
                        id: ctx.entityId,
                        className: ctx.state.val('background') ? 'background' : '',
                    }, [
                        ctx.h('div.box-title', ctx.state.val('title')),
                    ]);
                },
            },

            css: {
                typeRules: {
                    '.box': {
                        position: 'absolute',
                        'box-sizing': 'border-box',
                        'border-radius': '20px',
                    },

                    '.box .box-title': {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        padding: '20px',
                        'box-sizing': 'border-box',
                        'text-align': 'center',
                    },
                },

                entityRules: function (state) {
                    return {
                        left: state.val('x') + 'px',
                        top: state.val('y') + 'px',
                        width: state.val('w') + 'px',
                        height: state.val('h') + 'px',
                    };
                },
            },
        };
    });
};

