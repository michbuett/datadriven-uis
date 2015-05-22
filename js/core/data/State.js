module.exports = function (alchemy) {
    'use strict';

    /**
     * @class
     * @name core.data.State
     * @extends alchemy.core.MateriaPrima
     */
    alchemy.formula.define('core.data.State', [
        'alchemy.core.MateriaPrima',
        'alchemy.core.Immutatio',

    ], function (MateriaPrima, Immutatio, Slides) {

        return alchemy.extend(MateriaPrima, {
            getInitialState: function (numOfSlides) {
                var state = {
                    currentIndex: 0,
                    numOfSlides: numOfSlides,
                };

                return Immutatio.makeImmutable(state);
            }
        });
    });
};

