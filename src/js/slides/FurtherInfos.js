module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.FurtherInfos', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Mehr zum Thema'
            },

            children: [{
                type: 'core.entities.Text',
                state: {
                    text: 'http://entity-systems.wikidot.com'
                },
            }, {
                type: 'core.entities.Text',
                state: {
                    text: 'http://elm-lang.org'
                },
            }, {
                type: 'core.entities.Text',
                state: {
                    text: 'https://github.com/michbuett/todo-ecs'
                },
            }]
        };
    });
};

