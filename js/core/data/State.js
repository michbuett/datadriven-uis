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
        'core.data.Slides',

    ], function (MateriaPrima, Immutatio, Slides) {

        return alchemy.extend(MateriaPrima, {
            getInitialState: function () {
                var state = {
                    slide: 0,
                    step: 0,
                    slides: Slides,
                };

                return Immutatio.makeImmutable(state);
            }
        });
    });
};

