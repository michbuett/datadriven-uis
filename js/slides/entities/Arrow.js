module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.entities.Arrow', [], function () {
        return function (x, y, dir, text, background) {

            return {
                type: 'core.entities.Arrow',

                state: {
                    dir: dir,
                    text: text,
                    x: x,
                    y: y,
                    background: background
                }
            };
        };
    });
};

