"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var BootstrapMultiselectCustomElement;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export("BootstrapMultiselectCustomElement", BootstrapMultiselectCustomElement = function () {
                function BootstrapMultiselectCustomElement() {
                    _classCallCheck(this, BootstrapMultiselectCustomElement);
                }

                BootstrapMultiselectCustomElement.prototype.activate = function activate(model) {
                    this.element = model.element;
                    this.model = model.value;
                };

                BootstrapMultiselectCustomElement.prototype.attached = function attached() {
                    var element = $('#' + this.element.key);
                    var multiSelect = $(element).multiselect({
                        selectedClass: null,
                        includeSelectAllOption: true,

                        nonSelectedText: "Nenhuma opção selecionada",
                        nSelectedText: "opções selecionadas",
                        allSelectedText: "Todas as opções selecionadas",
                        onChange: function onChange(option, checked) {
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
                };

                BootstrapMultiselectCustomElement.prototype.detached = function detached() {};

                return BootstrapMultiselectCustomElement;
            }());

            _export("BootstrapMultiselectCustomElement", BootstrapMultiselectCustomElement);
        }
    };
});