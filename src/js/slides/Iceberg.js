module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('slides.Iceberg', [], function () {

        return {
            type: 'core.entities.Slide',

            state: {
                title: 'Nur die Spitze des Eisberges'
            },

            children: [{
                type: 'core.entities.Text',
                state: {
                    text: 'Performance'
                },
            },{
                type: 'core.entities.Text',
                state: {
                    text: 'Mobile'
                },
            },{
                type: 'core.entities.Text',
                state: {
                    text: 'Hotswapping'
                },
            }, {
                type: 'core.entities.Text',
                state: {
                    text: 'Timetravel'
                },
            }]
        };
    });
};

