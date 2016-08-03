import {bindable, inject} from "aurelia-framework";
//import {ModelInputCustomElement} from "src/resources/elements/modelInput"; // http://www.tutorialspoint.com/aurelia/aurelia_dependency_injections.htm
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ModelListCustomElement {
    models = [];
    ea;

    constructor(eventAggregator) {
        console.log('ModelListCustomElement constructor');

        this.ea = eventAggregator;
        let model = this.ea.subscribe('puppyMonkeyBaby', response => {
            console.log(response);
            this.models.push(response);
        });

        console.log(this.models);
    }
}

