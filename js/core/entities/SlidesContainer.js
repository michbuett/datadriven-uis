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

            globalToLocal: {
                numOfSlides: 'numOfSlides',
                currentIndex: 'currentIndex',
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

            '.slides-container-mask > *': {
                transition: 'opacity 0.5s ease-in-out'
            },
        };
    }

    /** @private */
    function renderDynamicCss(ctx) {
        var rules = {};
        var numOfSlides = ctx.state.val('numOfSlides');
        var currentIndex = ctx.state.val('currentIndex');

        for (var i = 0; i < numOfSlides; i++) {
            rules['.slides-container-mask > *:nth-child(' + (i + 1) + ')'] = {
                opacity: (i === currentIndex) ? 1 : 0
            };
        }

        return rules;
    }
};

