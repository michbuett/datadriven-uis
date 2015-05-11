module.exports = function (alchemy) {
    'use strict';

    var systems = [
        'alchemy.ecs.StateSystem',
        'alchemy.ecs.EventSystem',
        'alchemy.ecs.VDomRenderSystem',
        'alchemy.ecs.CssRenderSystem',
        'alchemy.ecs.LastStateSystem',
    ];

    /**
     * @class
     * @name core.app
     * @extends alchemy.web.Applicatus
     */
    alchemy.formula.add({
        name: 'core.app',
        extend: 'alchemy.web.Applicatus',

        requires: [
            'alchemy.ecs.Administrator',
            'alchemy.ecs.Apothecarius',
            'alchemy.web.Delegatus',
        ].concat(systems),

    }, function (_super) {
        return {
            /** @lends core.app.prototype */

            constructor: function (cfg) {

                this.entityAdmin = alchemy('alchemy.ecs.Administrator').brew({
                    repo: alchemy('alchemy.ecs.Apothecarius').brew(),
                });

                this.delegator = alchemy('alchemy.web.Delegatus').brew();

                _super.constructor.call(this, cfg);

                alchemy.each(systems, function (name) {
                    this.entityAdmin.addSystem(alchemy(name).brew({
                        delegator: this.delegator,
                        messages: this.messages,
                    }));
                }, this);
            },

            /** @override */
            update: function (p) {
                this.entityAdmin.update(p.state);
            },
        };
    });
};
