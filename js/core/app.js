module.exports = function (alchemy) {
    'use strict';

    var systems = [
        'alchemy.ecs.StateSystem',
        'alchemy.ecs.EventSystem',
        'alchemy.ecs.VDomRenderSystem',
        'alchemy.ecs.CssRenderSystem',
    ];

    var entityTypes = [
        'core.entities.Viewport',
        'core.entities.Slide',
        'core.entities.Text',
    ];

    /**
     * @class
     * @name core.app
     * @extends alchemy.web.Applicatus
     */
    alchemy.formula.define('core.app', [
        'alchemy.web.Applicatus',
        'alchemy.ecs.Administrator',
        'alchemy.ecs.Apothecarius',
        'alchemy.web.Delegatus',

        'core.data.State',
        'core.controller.Navigation',

    ].concat(systems, entityTypes), function (

        Applicatus,
        Administrator,
        Apothecarius,
        Delegatus,
        State,
        Navigation
    ) {

        return alchemy.extend(Applicatus, {
            /** @lends core.app.prototype */

            /** @override */
            constructor: function (cfg) {
                this.entityAdmin = Administrator.brew({
                    repo: Apothecarius.brew(),
                });

                this.delegator = Delegatus.brew();

                Applicatus.constructor.call(this, cfg);

                alchemy.each(systems, function (name) {
                    this.entityAdmin.addSystem(alchemy(name).brew({
                        delegator: this.delegator,
                        messages: this.messages,
                    }));
                }, this);

                this.wireUp(Navigation.brew());

                alchemy.each(entityTypes, function (name) {
                    this.entityAdmin.setEntityDefaults(name, alchemy(name));
                }, this);

                this.stateStore = State.brew();
                this.state = this.stateStore.getInitialState({
                    numOfSlides: this.slides.length
                });

                this.entityAdmin.initEntities([{
                    type: 'core.entities.Viewport',
                    children: this.slides,
                }], this.state);
            },

            /** @override */
            update: function (p) {
                this.stateStore.update(p.state);
                this.entityAdmin.update(p.state);
            },
        });
    });
};
