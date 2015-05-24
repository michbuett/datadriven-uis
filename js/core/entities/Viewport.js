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
                renderer: function renderVdom(ctx) {
                    return ctx.h('button#viewport', {
                        tabIndex: '1',
                        autofocus: '1',
                    }, ctx.renderAllChildren());
                }
            },

            css: {
                typeRules: {
                    'html, body, #viewport': {
                        width: '100%',
                        height: '100%',
                    },

                    '#viewport': {
                        padding: 0,
                        border: 0,
                        background: 'transparent',
                        color: 'inherit',
                    },

                    '#viewport:focus': {
                        'box-shadow': 'inset 0 0 10px white',
                    }
                }
            },

            events: {
                contextmenu: {
                    handler: function onContextMenu(event, state, message) {
                        message.trigger('navigation:prev');
                        event.preventDefault();
                        event.stopPropagation();
                    }
                },

                click: {
                    handler: function onClick(event, state, message) {
                        message.trigger('navigation:next');
                    }
                },

                keydown: {
                    handler: function onKeypressed(event, state, message) {
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
                },
            },
        };
    });
};
