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

            events: {
                keydown: {
                    handler: onKeypressed,
                }
            },

            children: {
                btnPrev: {
                    id: 'btn-prev',
                    type: 'core.entities.NavButton',

                    state: {
                        dir: 'prev',
                        text: '↶',
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
        return ctx.h('div#viewport', {
            tabIndex: '1'
        }, ctx.renderAllChildren());
    }

    /** @private */
    function renderStaticCss() {
        return {
            'html, body, #viewport, .slides-wrap': {
                width: '100%',
                height: '100%',
            },

            '#viewport:focus': {
                'box-shadow': 'inset 0 0 10px white',
            }
        };
    }

    /** @private */
    function renderDynamicCss(state) {
    }

    /** @private */
    function onKeypressed(event, state, message) {
        var key = event.which || event.keyCode;
        console.log('onKeypressed', event, key);

        if (key === 37) {
            message.trigger('navigation:prev');
            return;
        }

        if (key === 39) {
            message.trigger('navigation:next');
            return;
        }
    }
};
