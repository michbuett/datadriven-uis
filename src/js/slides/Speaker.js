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
                        return ctx.h('div#' + ctx.entityId, null, [
                            ctx.h('ul', [
                                ctx.h('li', 'Familienvater'),
                                ctx.h('li', 'Begeisterter Javascript-Entwickler'),
                                ctx.h('li', 'Verfechter agiler Entwicklung'),
                                ctx.h('li', 'Langjährige Erfahrung mit Webprojekten'),
                            ])
                        ]);
                    },
                },

                css: {
                    entityRules: {
                        width: '1020px',
                        height: '600px',
                        margin: '0 auto',
                        position: 'relative',
                        background: 'url(img/speaker.png) right center no-repeat',

                        ul: {
                            top: '55px',
                            width: '500px',
                            position: 'relative',
                            'text-align': 'left',
                        },

                        li: {
                            margin: '35px 10px',
                        }
                    },
                }
            }],
        };
    });
};

