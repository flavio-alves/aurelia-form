import {customElement} from "aurelia-framework";

@customElement('bootstrap-multiselect')
export class BootstrapMultiselect {

    /**
     * Handles activate event
     *
     * @param model
     */
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    /**
     * Handles attached event
     */
    attached() {
        let element = $('#' + this.element.key);
        let multiSelect = $(element).multiselect({
            selectedClass: null,
            includeSelectAllOption: true,
            // TODO - THIS LABELS ARE TEMPORARY! TRANSLATION IS MISSING
            nonSelectedText: "Nenhuma opção selecionada",
            nSelectedText: "opções selecionadas",
            allSelectedText: "Todas as opções selecionadas",
            onChange: function (option, checked) {
                $.uniform.update();
            }
        });

        $(multiSelect).on('change', function (event) {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });

        $(".styled, .multiselect-container input").uniform({radioClass: 'choice'});
    }

    /**
     * Handles detached event
     */
    detached() {
        // $('#' + this.element.key).select2('destroy');
    }

    /**
     * Returns selected attribute
     *
     * @param option
     *
     * @returns {string} 'select' if option == model, otherwise returns ''
     */
    selectedAttribute(option) {
        return this.model.indexOf(option) > -1 ? 'selected' : ''
    };

}
