module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.UIArchitecture-01', [
        'slides.entities.Arrow',
        'slides.entities.Entity',
        'slides.entities.System',

    ], function (arrow, entity, system) {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Wie sieht die Architektur des User Interfaces aus?'
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
                        x: 50,
                        y: 25,
                        w: 900,
                        h: 675,
                        background: true,
                    }
                }, {
                    type: 'core.entities.Box',
                    state: {
                        title: 'Entities',
                    },
                    css: {
                        entityRules: function () {
                            return {
                                'left': '75px',
                                'top': '75px',
                                'width': '825px',
                                'height': '250px',
                                'color': 'white',
                                'text-align': 'left',
                                'border': '3px white dashed',
                                'background-color': 'rgba(200, 20, 255, 0.2)',
                            };
                        }
                    },
                },

                entity('Entity #1', 85, 135, ['html', 'css']),
                entity('Entity #2', 340, 135, ['html', 'css', 'state']),

                {
                    vdom: {
                        renderer: function (ctxt) {
                            return ctxt.h('div', {
                                style: {
                                    'position': 'absolute',
                                    'left': '595px',
                                    'top': '240px',
                                },
                            }, '...');
                        }
                    }
                },

                entity('Entity #n', 640, 135, ['html', 'state', 'events']),

                {
                    type: 'core.entities.Box',
                    state: {
                        title: 'Systems',
                    },
                    css: {
                        entityRules: function () {
                            return {
                                'left': '75px',
                                'top': '350px',
                                'width': '825px',
                                'height': '200px',
                                'color': 'white',
                                'text-align': 'left',
                                'border': '3px white dashed',
                                'background-color': 'rgba(20, 200, 255, 0.2)',
                                '.box-title': { 'text-align': 'left', },
                            };
                        }
                    },
                },

                system('State', 200), arrow(245, 325, 'up'), arrow(275, 325, 'down'),

                system('HTML', 355), arrow(415, 325, 'down'), arrow(415, 525, 'down'),

                system('CSS', 510), arrow(570, 325, 'down'), arrow(570, 525, 'down'),

                system('Event', 665), arrow(710, 325, 'up'), arrow(740, 325, 'down'), arrow(725, 525, 'up'),

                {
                    type: 'core.entities.Box',
                    state: {
                        title: 'Browser',
                        x: 50,
                        y: 625,
                        w: 900,
                        h: 75,
                    }
                }, arrow(0, 450, 'right', 'State'), arrow(800, 450, 'right', 'Message')]
            }]
        };
    });
};
