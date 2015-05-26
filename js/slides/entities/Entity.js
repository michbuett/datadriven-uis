module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.entities.Entity', [], function () {
        return function entity(name, x, y, components, background) {
            return {
                vdom: {
                    renderer: function (ctx) {
                        var h = ctx.h;
                        return h('div.entity', {
                            className: background ? 'background' : '',
                            style: {
                                'left': x + 'px',
                                'top': y + 'px',
                            }
                        }, [
                            h('div.entity-name', null, name),
                            h('div.entity-components', null, alchemy.each(components, function (cmp) {
                                return h('span.cmp', cmp);
                            })),
                        ]);
                    },
                },

                css: {
                    typeRules: {
                        '.entity': {
                            'position': 'absolute',
                            'width': '250px',
                            'height': '175px',
                            'background-color': 'white',
                            'border-radius': '20px',

                            '.entity-name': {
                                'padding': '20px',
                            },

                            '.cmp': {
                                'background-color': 'lightgray',
                                'font-size': '20px',
                                'padding': '5px',
                                'margin': '5px',
                            }
                        },
                    },
                },
            };
        };
    });
};

