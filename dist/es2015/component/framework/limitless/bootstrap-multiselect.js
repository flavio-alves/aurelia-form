var _dec, _class;

import { customElement } from "aurelia-framework";

export let BootstrapMultiselect = (_dec = customElement('bootstrap-multiselect'), _dec(_class = class BootstrapMultiselect {
    activate(model) {
        this.element = model.element;
        this.model = model.value;
    }

    attached() {
        let element = $('#' + this.element.key);
        let multiSelect = $(element).multiselect({
            selectedClass: null,
            includeSelectAllOption: true,

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

        $(".styled, .multiselect-container input").uniform({ radioClass: 'choice' });
    }

    detached() {}

    isSelected(option) {
        return this.value.indexOf(option) > -1;
    }

}) || _class);