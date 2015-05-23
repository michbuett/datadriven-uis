module.exports = function (alchemy) {
    'use strict';

    /**
     * @class
     * @name core.entities.SlidesContainer
     */
    alchemy.formula.define('core.entities.SlidesContainer', [], function () {

        return {
            /** @lends core.entities.SlidesContainer.prototype */

            vdom: {
                renderer: function (ctx) {
                    return ctx.h('div.slides-container-mask', null, ctx.renderAllChildren());
                }
            },

            css: {
                typeRules: {
                    '.slides-container-mask': {
                        width: '100%',
                        height: '100%',
                    },
                },
            },

            globalToLocal: {
                numOfSlides: 'numOfSlides',
                currentIndex: 'currentIndex',
            },
        };
    });
};

