module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.NavButton', [], function () {

        return {
            vdom: {
                renderer: function (ctx) {
                    var h = ctx.h;
                    var state = ctx.state.val();

                    return h('div', {
                        className: ['nav-btn', state.type, state.dir].join(' '),
                    }, [
                        h('div.nav-btn-inner', null, state.text),
                    ]);
                },
            },

            staticCss: {
                rules: {
                    '.nav-btn': {
                        position: 'absolute',
                        top: 0,
                        width: '25%',
                        display: 'table',
                        cursor: 'pointer',
                        opacity: 0,
                        border: '1px solid black',
                        margin: '20px 40px',
                        'box-sizing': 'boder-box',
                        'border-radius': '50px',
                        'font-size': '50px',
                        'z-index': 100,
                        'background-color': 'rgba(200, 200, 200, .1)',
                    },

                    '.nav-btn:hover': {
                        opacity: 0.2,
                    },

                    '.nav-btn > div': {
                        display: 'table-cell',
                        'vertical-align': 'middle',
                        'text-align': 'center',
                    },

                    '.nav-btn.prev': {
                        left: 0,
                    },

                    '.nav-btn.next': {
                        right: 0,
                    },

                    '.nav-btn.step': {
                        top: '50%',
                        height: '400px',
                        'margin-top': '-200px',
                    },

                    '.nav-btn.slide': {
                        bottom: 0,
                        height: '100px',
                        'z-index': 200,
                    },
                }
            },
        };
    });
};
