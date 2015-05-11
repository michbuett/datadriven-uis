(function () {
    'use strict';

    var alchemy = require('alchemy');

    alchemy.heatUp({
        path: {
            alchemy: 'support/alchemy/lib',
            core: 'js/core',
        },

        require: [
            'core.app',
        ],

        onReady: function () {
            window.app = alchemy('core.app').brew();
            window.app.launch();
        },
    });
}());

