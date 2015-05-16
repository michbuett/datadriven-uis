module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.controller.Navigation', [
        'alchemy.core.MateriaPrima',
    ], function (MateriaPrima) {

        return alchemy.extend(MateriaPrima, {

            messages: {
                'slide:next': 'onNextSlide',
                'slide:prev': 'onPrevSlide',
                'step:next': 'onNextStep',
                'step:prev': 'onPrevStep',
            },

            onNextSlide: function (state) {
                console.log('TODO: navigate to next slide...');
                return state;
            },

            onPrevSlide: function (state) {
                console.log('TODO: navigate to previous slide...');
                return state;
            },

            onNextStep: function (state) {
                console.log('TODO: navigate to next step...');
                return state;
            },

            onPrevStep: function (state) {
                console.log('TODO: navigate to previous step...');
                return state;
            },
        });
    });
};
