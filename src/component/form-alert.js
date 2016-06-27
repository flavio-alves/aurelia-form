import {bindable, customElement} from "aurelia-framework";
import {resolvedView} from "aurelia-view-manager";

@customElement('form-alert')
@resolvedView('spoonx/form', 'schema-form')
export class FormAlert {
    @bindable alert;
}