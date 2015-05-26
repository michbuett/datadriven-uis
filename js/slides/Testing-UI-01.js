module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Testing-UI-01', [], function () {

        // - neu: ECS

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Testing - Wie lässt sich das UI testen?'
            },

            children: [{

                vdom: {
                    renderer: function (ctx) {
                        return ctx.h('div.diagram', null, ctx.renderAllChildren());
                    },
                },

                css: {
                    typeRules: {
                        '.diagram': {
                            position: 'relative',
                            width: '1000px',
                            height: '700px',
                            margin: '0 auto',
                        },
                    },
                },

                children: [{
                    type: 'core.entities.Box',
                    state: {
                        title: 'UI',
                        x: 75,
                        y: 90,
                        w: 325,
                        h: 600,
                    }
                }, {
                    type: 'core.entities.Arrow',
                    state: {
                        dir: 'left',
                        text: 'State',
                        x: 400,
                        y: 250,
                        background: true,
                    }
                }, {
                    type: 'core.entities.Arrow',
                    state: {
                        dir: 'right',
                        text: 'Events',
                        x: 400,
                        y: 400,
                        background: true,
                    }
                }, {
                    type: 'core.entities.Box',
                    state: {
                        title: 'Application',
                        x: 600,
                        y: 90,
                        w: 325,
                        h: 600,
                        background: true,
                    }
                }, {
                    type: 'core.entities.Box',

                    state: {
                        title: 'Entity Component System',
                    },

                    css: {
                        entityRules: function () {
                            return {
                                "top": "150px",
                                'left': '100px',
                                'width': '275px',
                                'height': '500px',
                                'background-color': 'rgba(200, 20, 255, 0.2)',

                                '.box-title': {
                                    'top': '100px',
                                },
                            };
                        }
                    },
                }]
            }]
        };
    });
};
