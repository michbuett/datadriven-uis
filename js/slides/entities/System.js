module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.entities.System', [], function () {
        return function (name, x, y, background) {
            return {
                type: 'core.entities.Box',

                state: {
                    title: name + ' System',
                    x: x,
                    y: y || 425,
                    w: 150,
                    h: 100,
                    background: background
                }
            };
        };
    });
};
