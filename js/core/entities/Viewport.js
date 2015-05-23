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

            css: {
                typeRules: renderStaticCss(),
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

                    css: {
                        typeRules: {
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

                    css: {
                        typeRules: {
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
        return ctx.h('button#viewport', {
            tabIndex: '1',
            autofocus: '1',
        }, ctx.renderAllChildren());
    }

    /** @private */
    function renderStaticCss() {
        return {
            'html, body, #viewport, .slides-wrap': {
                width: '100%',
                height: '100%',
            },

            '#viewport': {
                padding: 0,
                border: 0,
                background: 'transparent',
                color: 'inherit',
                'font-size': 'inherit',
            },

            '#viewport:focus': {
                'box-shadow': 'inset 0 0 10px white',
            }
        };
    }

    /** @private */
    function onKeypressed(event, state, message) {
        var key = event.which || event.keyCode;
        // console.log('onKeypressed', event, key);

        if (key === 37 || key === 27) { // [<], [ESC]
            message.trigger('navigation:prev');
            return;
        }

        if (key === 39 || key === 13) { // [>], [RETURN]
            message.trigger('navigation:next');
            return;
        }
    }
};
