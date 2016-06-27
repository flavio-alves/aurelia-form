import {bindable, bindingMode, customElement, computedFrom} from "aurelia-framework";
import {resolvedView} from "aurelia-view-manager";

@customElement('form-alert')
@resolvedView('spoonx/form', 'form-alert')
export class FormAlert {

    @bindable({defaultBindingMode: bindingMode.twoWay})
    alert;

}