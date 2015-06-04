module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.AppArchitecture-02', [], function () {

        // - prinzipiell ist Schnitt egal
        // - technisch wird vieles einfacher wenn Schnitt möglichts weit rechts
        // - Client = (HTML, JS, CSS)

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Architektur'
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
                    }
                }, {
                    type: 'core.entities.Arrow',
                    state: {
                        dir: 'right',
                        text: 'Message',
                        x: 400,
                        y: 400,
                    }
                }, {
                    type: 'core.entities.Box',
                    state: {
                        title: 'Application',
                        x: 600,
                        y: 90,
                        w: 325,
                        h: 600,
                    }
                }, {
                    type: 'core.entities.Box',

                    state: {
                        title: 'Client',
                    },

                    css: {
                        entityRules: function () {
                            return {
                                "top": "25px",
                                'width': '715px',
                                'height': '675px',
                                'color': 'white',
                                'border': '3px white dashed',
                                'background-color': 'rgba(20, 200, 255, 0.2)',
                            };
                        }
                    },
                }, {
                    type: 'core.entities.Box',

                    state: {
                        title: 'Server',
                    },

                    css: {
                        entityRules: function () {
                            return {
                                "top": "25px",
                                'left': '725px',
                                'width': '275px',
                                'height': '675px',
                                'color': 'white',
                                'border': '3px white dashed',
                                'background-color': 'rgba(200, 20, 255, 0.2)',
                            };
                        }
                    },
                }]
            }]
        };
    });
};
