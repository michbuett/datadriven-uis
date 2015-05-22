module.exports = function (alchemy) {
    'use strict';

    alchemy.formula.define('core.controller.Navigation', [
        'alchemy.core.MateriaPrima',
    ], function (MateriaPrima) {

        return alchemy.extend(MateriaPrima, {

            messages: {
                'navigation:next': 'onNextSlide',
                'navigation:prev': 'onPrevSlide',
            },

            /** @private */
            onNextSlide: function (state) {
                console.log('TODO: navigate to next slide...');

                var current = state.val('currentIndex');
                if (current < state.val('numOfSlides') - 1) {
                    return state.set('currentIndex', current + 1);
                }

                return state;
            },

            /** @private */
            onPrevSlide: function (state) {
                console.log('TODO: navigate to previous slide...');

                var current = state.val('currentIndex');
                if (current > 0) {
                    return state.set('currentIndex', current - 1);
                }

                return state;
            },
        });
    });
};
