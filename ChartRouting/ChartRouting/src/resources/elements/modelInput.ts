import {bindable, inject} from "aurelia-framework";
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ModelInputCustomElement {  // converts to <model-input>
    date: string; // @bindable turn camel-case property names to dash-case
    precipitation: string;
    temperature: string;
    q_observed: string;
    q_simulated: string;
    ea;

    constructor(eventAggregator) {
        console.log('ModelInputCustomElement constructor');
        this.ea = eventAggregator;
    }

    submit() {
        var payload = {
            date: this.date,
            precipitation: this.precipitation,
            temperature: this.temperature,
            q_observed: this.q_observed,
            q_simulated: this.q_simulated
        };

        console.log('submitclick. %O', payload);
        this.ea.publish('puppyMonkeyBaby', payload);
    }
}
