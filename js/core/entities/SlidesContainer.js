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
                renderer: renderVdom,
            },

            staticCss: {
                rules: renderStaticCss(),
            },

            css: {
                renderer: renderDynamicCss
            },
        };
    });

    /** @private */
    function renderVdom(ctx) {
        return ctx.h('div.slides-container-mask', null, ctx.renderAllChildren());
    }

    /** @private */
    function renderStaticCss() {
        return {
            '.slides-container-mask': {
                width: '100%',
                height: '100%',
            },
        };
    }

    /** @private */
    function renderDynamicCss(state) {
    }
};

