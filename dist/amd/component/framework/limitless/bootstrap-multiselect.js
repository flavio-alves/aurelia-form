define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.BootstrapMultiselect = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    var _dec, _dec2, _class, _desc, _value, _class2;

    var BootstrapMultiselect = exports.BootstrapMultiselect = (_dec = (0, _aureliaFramework.customElement)('bootstrap-multiselect'), _dec2 = (0, _aureliaFramework.computedFrom)('value'), _dec(_class = (_class2 = function () {
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

        BootstrapMultiselect.prototype.checkSelected = function checkSelected(option) {
            return this.value.indexOf(option) > -1;
        };

        return BootstrapMultiselect;
    }(), (_applyDecoratedDescriptor(_class2.prototype, 'checkSelected', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'checkSelected'), _class2.prototype)), _class2)) || _class);
});