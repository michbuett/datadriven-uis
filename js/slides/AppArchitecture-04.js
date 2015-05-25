module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.AppArchitecture-04', [], function () {

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
                        background: true,
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
                }]
            }]
        };
    });
};
