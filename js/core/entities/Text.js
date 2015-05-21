module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.entities.Text', [], function () {

        return {
            vdom: {
                renderer: function (ctx) {
                    var s = ctx.state;

                    return ctx.h('div', {
                        className: 'text ' + (s.val('className') || ''),
                        id: ctx.entityId,
                    }, s.val('text'));
                },
            },

            staticCss: {
                rules: {
                }
            },
        };
    });
};


