import {bindable, bindingMode, containerless, customElement} from "aurelia-framework";
import {resolvedView} from "aurelia-view-manager";

@customElement('schema-form')
@resolvedView('spoonx/form', 'schema-form')
export class SchemaForm {
    @bindable schema;

    @bindable({defaultBindingMode: bindingMode.twoWay})
    model;
}
