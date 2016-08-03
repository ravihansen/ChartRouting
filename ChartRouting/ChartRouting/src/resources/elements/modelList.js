System.register(["aurelia-framework", 'aurelia-event-aggregator'], function(exports_1, context_1) {
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
    var aurelia_framework_1, aurelia_event_aggregator_1;
    var ModelListCustomElement;
    return {
        setters:[
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            }],
        execute: function() {
            ModelListCustomElement = (function () {
                function ModelListCustomElement(eventAggregator) {
                    var _this = this;
                    this.models = [];
                    console.log('ModelListCustomElement constructor');
                    this.ea = eventAggregator;
                    var model = this.ea.subscribe('puppyMonkeyBaby', function (response) {
                        console.log(response);
                        _this.models.push(response);
                    });
                    console.log(this.models);
                }
                ModelListCustomElement = __decorate([
                    aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator), 
                    __metadata('design:paramtypes', [Object])
                ], ModelListCustomElement);
                return ModelListCustomElement;
            }());
            exports_1("ModelListCustomElement", ModelListCustomElement);
        }
    }
});
//# sourceMappingURL=modelList.js.map