(function () {
    'use strict';

    var alchemy = require('alchemy');

    alchemy.heatUp({
        path: {
            alchemy: 'support/alchemy/lib',
            core: 'js/core',
            slides: 'js/slides',
        },

        require: [
            'core.app',
            'slides.all',
        ],

        onReady: function () {
            window.app = alchemy('core.app').brew({
                slides: alchemy('slides.all'),
            });
            window.app.launch();
        },
    });
}());

