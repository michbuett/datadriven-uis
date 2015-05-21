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

            children: {
                btnPrev: {
                    id: 'btn-prev',
                    type: 'core.entities.NavButton',

                    state: {
                        dir: 'prev',
                        text: '↶',
                         // text: '<<',
                    },

                    events: {
                        click: {
                            message: 'navigation:prev'
                        }
                    },

                    staticCss: {
                        rules: {
                            '#btn-prev.nav-btn': {
                                left: '20px',
                                'border-right': 0,
                                'text-align': 'left',
                            }
                        },
                    },
                },

                btnNext: {
                    id: 'btn-next',
                    type: 'core.entities.NavButton',

                    state: {
                        dir: 'next',
                        text: '↷',
                        // text: '>>',
                    },

                    events: {
                        click: {
                            message: 'navigation:next'
                        }
                    },

                    staticCss: {
                        rules: {
                            '#btn-next.nav-btn': {
                                right: '20px',
                                'border-left': 0,
                                'text-align': 'right',
                            }
                        },
                    },
                },

                slides: {
                    id: 'slides-container',
                    type: 'core.entities.SlidesContainer'
                },
            },
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
