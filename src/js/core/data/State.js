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

            storageKey: 'slides',

            getInitialState: function (cfg) {
                var state = alchemy.mix({
                    currentIndex: 0,
                    numOfSlides: 0,
                }, this.load(), cfg);

                return Immutatio.makeImmutable(state);
            },

            update: function (appState) {
                if (appState === this.appState) {
                    return;
                }

                this.save(appState);
                this.appState = appState;
            },

            save: function (state) {
                localStorage.setItem(this.storageKey, JSON.stringify(state.val()));
            },

            load: function () {
                try {
                    return JSON.parse(localStorage.getItem(this.storageKey));
                } catch (e) {
                    return {};
                }
            },
        });
    });
};

