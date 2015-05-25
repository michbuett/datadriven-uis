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
                    var className = 'arrow ' + ctx.state.val('dir');

                    if (ctx.state.val('background')) {
                        className += ' background';
                    }

                    return ctx.h('div', {
                        id: ctx.entityId,
                        className: className
                    }, [
                        ctx.h('span.arrow-text', ctx.state.val('text')),
                    ]);
                }
            },

            css: {
                typeRules: {
                    '.arrow': {
                        'position': 'absolute',
                        'box-sizing': 'border-box',
                        'vertical-align': 'middle',
                        'text-align': 'center',
                    },

                    '.arrow.right, .arrow.left': {
                        'width': '200px',
                        'min-height': '30px',
                    },

                    '.arrow.up, .arrow.down': {
                        'min-width': '30px',
                        'height': '100px',
                    },

                    '.arrow-text': {
                        'background-color': 'white',
                        'border-radius': '20px',
                        'padding': '5px 10px',
                    },

                    '.arrow-text:empty': {
                        'visibility': 'hidden',
                    }
                },

                entityRules: function (state) {
                    return {
                        left: state.val('x') + 'px',
                        top: state.val('y') + 'px',
                        background: 'url(svg/arrow_' + state.val('dir') + '.svg) 50% 50% no-repeat',
                    };
                },
            },
        };
    });
};

