module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.Arrow', [], function () {

        return {

            state: {
                text: '',
                top: 0,
                left: 0,
            },


            vdom: {
                renderer: function (ctx) {
                    return ctx.h('div.svg', {
                        id: ctx.entityId,
                        className: ctx.state.val('background') ? 'background' : '',
                    }, ctx.state.val('text'));
                }
            },

            css: {
                typeRules: {
                    '.svg': {
                        position: 'absolute',
                        width: '250px',
                        height: '200px',
                        padding: '0 20px',
                        'box-sizing': 'border-box',
                        'vertical-align': 'middle',
                        'line-height': '200px',
                    },
                },

                entityRules: function (state) {
                    var dir = state.val('dir');

                    return {
                        left: state.val('x') + 'px',
                        top: state.val('y') + 'px',
                        background: 'url(svg/arrow_' + dir + '.svg)',
                        'text-align': dir === 'left' ? 'right' : 'left',
                    };
                },
            },
        };
    });
};

