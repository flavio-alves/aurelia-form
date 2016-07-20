export let BootstrapMultiselectCustomElement = class BootstrapMultiselectCustomElement {
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

};