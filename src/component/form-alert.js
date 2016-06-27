import {bindable, customElement, computedFrom} from "aurelia-framework";
import {resolvedView} from "aurelia-view-manager";

@customElement('form-alert')
@resolvedView('spoonx/form', 'schema-form')
export class FormAlert {
    @bindable alert;
    
    @computedFrom('alert')
    get attributes() {
        return this.alert.attributes;
    }

    @computedFrom('alert')
    get iconAttributes() {
        return this.alert.icon.attributes;
    }

    @computedFrom('alert')
    get message() {
        return this.alert.message;
    }

    @computedFrom('alert')
    get details() {
        return this.alert.details;
    }
}