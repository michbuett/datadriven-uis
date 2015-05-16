module.exports = function (alchemy) {
    'use strict';

    /**
     * @class
     * @name core.entities.ViewPort
     */
    alchemy.formula.define('core.entities.Viewport', [], function () {

        return {
            /** @lends core.entities.Viewport.prototype */

            vdom: {
                root: document.getElementById('viewport'),
                renderer: renderVdom,
            },

            staticCss: {
                rules: renderStaticCss(),
            },

            css: {
                renderer: renderDynamicCss
            },

            children: alchemy.mix(alchemy.each({
                btnPrevStep: {
                    type: 'step',
                    dir: 'prev',
                    text: '<',
                },

                btnPrevSlide: {
                    type: 'slide',
                    dir: 'prev',
                    text: '<<',
                },

                btnNextStep: {
                    type: 'step',
                    dir: 'next',
                    text: '>',
                },

                btnNextSlide: {
                    type: 'slide',
                    dir: 'next',
                    text: '>>',
                },

            }, function (cfg) {
                return {
                    type: 'core.entities.NavButton',

                    state: cfg,

                    events: {
                        click: {
                            message: cfg.type + ':' + cfg.dir,
                        }
                    },
                };

            }), {
                slides: {
                    id: 'slides-container',
                    type: 'core.entities.SlidesContainer'
                },
            }),
        };
    });

    /** @private */
    function renderVdom(ctx) {
        return ctx.h('div#viewport', null, ctx.renderAllChildren());
    }

    /** @private */
    function renderStaticCss() {
        return {
            'html, body, #viewport, .slides-wrap': {
                width: '100%',
                height: '100%',
            },
        };
    }

    /** @private */
    function renderDynamicCss(state) {
    }
};
