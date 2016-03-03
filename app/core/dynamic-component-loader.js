System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ComponentProvider;
    function componentProxyFactory(provider) {
        var VirtualComponent = (function () {
            function VirtualComponent(el, loader, inj, provider) {
                System.import(provider.path)
                    .then(function (m) {
                    loader.loadIntoLocation(provider.provide(m), el, 'content');
                });
            }
            VirtualComponent = __decorate([
                core_1.Component({
                    selector: 'component-proxy',
                    providers: [core_1.provide(ComponentProvider, { useValue: provider })]
                }),
                core_1.View({
                    template: "<span #content></span>"
                }), 
                __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, core_1.Injector, ComponentProvider])
            ], VirtualComponent);
            return VirtualComponent;
        }());
        return VirtualComponent;
    }
    exports_1("componentProxyFactory", componentProxyFactory);
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * A factory for a <a href="https://en.wikipedia.org/wiki/Proxy_pattern#Possible_Usage_Scenarios">Virtual Proxy</a> Component
             * to provide a lazily loaded `Component` which will be loaded and rendered by the `DynamicComponentLoader` on entering a route when
             * the constructor of the Virtual Component is executed.
             *
             * @Example:
             * {
             *   path: '/path-in-the-browser',
             *   component: componentProxyFactory({
             *     path: './path/to/the/file',
             *     provide: m => m.ClassNameOfComponent
             *   }),
             *   as: 'ComponentName'
             * }
             *
             */
            ComponentProvider = (function () {
                function ComponentProvider() {
                }
                return ComponentProvider;
            }());
        }
    }
});
