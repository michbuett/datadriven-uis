module.exports = function (alchemy) {
    'use strict';

    /**
     * @class
     * @name core.data.Slides
     */
    alchemy.formula.define('core.data.Slides', [], function () {

        return [{
            title: 'Datadriven User Interface',
        }, {
            title: 'Speaker',
            items: [],
        }, {
            title: 'Warum UI',
            items: [
                'Anspruchsvoll',
                'Vorhandene Ansätze unzureichend',
                'Schwierig zu testen',
            ],
        }];
    });
};
