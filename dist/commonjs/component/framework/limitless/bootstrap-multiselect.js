'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BootstrapMultiselect = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BootstrapMultiselect = exports.BootstrapMultiselect = (_dec = (0, _aureliaFramework.customElement)('bootstrap-multiselect'), _dec(_class = function () {
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

    BootstrapMultiselect.prototype.isSelected = function isSelected(option) {
        return this.value.indexOf(option) > -1;
    };

    return BootstrapMultiselect;
}()) || _class);