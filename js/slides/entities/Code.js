module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.entities.Code', [], function () {
        var renderer =  function (ctx) {
            var h = ctx.h;
            var code = ctx.state.val('code');

            return h('div.code-block', null, alchemy.each(code, function (line, index) {
                return h('div.line', null, [
                    h('pre.linenumber', null, '' + index),
                    h('pre.code', null, line),
                ]);
            }));
        };

        var css = {
            '.code-block': {
                position: 'relative',
                width: '1000px',
                margin: '0 auto',
                'font-family': 'monospace',
                'font-size': '25px',

                '& .linenumber, & .code': {
                    display: 'inline-block',
                },

                '.linenumber': {
                    width: '75px',
                    opacity: '.3',
                    'text-align': 'right',
                },

                '.code': {
                    width: 'calc(100% - 75px)',
                    padding: '0 15px',
                    'box-sizing': 'border-box',
                    'text-align': 'left',
                }
            },
        };

        return function (code) {
            return {
                state: {
                    code: code
                },

                vdom: {
                    renderer: renderer,
                },

                css: {
                    typeRules: css,
                },
            };
        };
    });
};
