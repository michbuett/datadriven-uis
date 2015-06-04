module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Speaker', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Michael Büttner'
            },

            children: [{
                vdom: {
                    renderer: function (ctx) {
                        return ctx.h('div#speaker-img');
                    }
                },

                css: {
                    typeRules: {
                        '#speaker-img': {
                            width: '100%',
                            height: '500px',
                            background: 'url(img/speaker.png) right center no-repeat',
                            margin: '20px 0',
                        },
                    },
                },
            }, {
                type: 'core.entities.Text',
                state: {
                    text: 'Langjährige Erfahrung mit Webprojekten ◆ JavaScript-Begeisterter ◆ Verfechter agiler Entwicklung'
                },
            }]
        };
    });
};
