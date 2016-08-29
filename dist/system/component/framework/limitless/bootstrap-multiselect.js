'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var customElement, _dec, _class, BootstrapMultiselect;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            customElement = _aureliaFramework.customElement;
        }],
        execute: function () {
            _export('BootstrapMultiselect', BootstrapMultiselect = (_dec = customElement('bootstrap-multiselect'), _dec(_class = function () {
                function BootstrapMultiselect() {
                    _classCallCheck(this, BootstrapMultiselect);
                }

                BootstrapMultiselect.prototype.activate = function activate(model) {
                    this.element = model.element;
                    this.model = model.value;
                };

                BootstrapMultiselect.prototype.attached = function attached() {
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

                BootstrapMultiselect.prototype.detached = function detached() {};

                BootstrapMultiselect.prototype.selectedAttribute = function selectedAttribute(option) {
                    return this.model.indexOf(option) > -1 ? 'selected' : '';
                };

                return BootstrapMultiselect;
            }()) || _class));

            _export('BootstrapMultiselect', BootstrapMultiselect);
        }
    };
});