module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Definition-03', [], function () {

        // - UI ist (wie der Name schon sagt) die Schnittstelle zu Nutzer
        // - Darstellung von Informationen
        // - Eingaben des Nuter entgegen nehmen
        // - nichts neues
        // - im Prinzip das V in MVC
        // - muss evtl für spezielle Endgeräte angepasst werden

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
                        y: 75,
                        w: 300,
                        h: 600,
                    }
                }, {
                    type: 'core.entities.Arrow',
                    state: {
                        dir: 'left',
                        text: 'State',
                        x: 375,
                        y: 150,
                        background: true,
                    }
                }, {
                    type: 'core.entities.Arrow',
                    state: {
                        dir: 'right',
                        text: 'Events',
                        x: 375,
                        y: 400,
                        background: true,
                    }
                }, {
                    type: 'core.entities.Box',
                    state: {
                        title: 'Application',
                        x: 625,
                        y: 75,
                        w: 300,
                        h: 600,
                        background: true,
                    }
                }]
            }]
        };
    });
};
