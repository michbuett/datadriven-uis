module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.NavButton', [], function () {

        return {
            vdom: {
                renderer: function (ctx) {
                    return ctx.h('div.nav-btn', null, [
                        ctx.h('div.nav-btn-inner', null, ctx.state.val('text')),
                    ]);
                },
            },

            css: {
                typeRules: {
                    '.nav-btn': {
                        position: 'absolute',
                        top: '100px',
                        width: '100px',
                        height: 'calc(100% - 200px)',
                        display: 'table',
                        cursor: 'pointer',
                        opacity: 0,
                        padding: '20px',
                        border: '1px solid rgb(251, 242, 221)',
                        'box-sizing': 'boder-box',
                        'font-size': '50px',
                        'z-index': 100,
                    },

                    '.nav-btn:hover': {
                        opacity: 0.2,
                    },

                    '.nav-btn > div': {
                        display: 'table-cell',
                        'vertical-align': 'middle',
                    },
                }
            },
        };
    });
};
