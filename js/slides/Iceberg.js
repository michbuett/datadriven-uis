module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Iceberg', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Die Spitze des Eisberges'
            },

            children: [{
                vdom: {
                    renderer: function (ctx) {
                        return ctx.h('div#iceberg-img');
                    }
                },

                css: {
                    typeRules: {
                        '#iceberg-img': {
                            width: '100%',
                            height: '400px',
                            background: 'url(img/iceberg.png) center center no-repeat',
                            margin: '20px 0',
                        },
                    },
                },

            }, {
                type: 'core.entities.Text',
                state: {
                    text: 'Performance ◆ Mobile ◆ Hotswapping ◆ Timetravel'
                },
            }]
        };
    });
};

