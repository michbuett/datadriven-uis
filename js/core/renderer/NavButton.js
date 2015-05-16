module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.renderer.NavButton', [], function () {

        return function (type, dir, text) {
            return function (ctx) {
                return ctx.h('div', {
                    className: 'nav-btn ' + type + ' ' + dir
                }, ctx.h('nav-btn-inner', null, text));
            };
        };
    });
};

