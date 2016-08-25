define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Select2 = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Select2 = exports.Select2 = (_dec = (0, _aureliaFramework.customElement)('select2'), _dec(_class = function () {
        function Select2() {
            _classCallCheck(this, Select2);
        }

        Select2.prototype.activate = function activate(model) {
            this.element = model.element;
            this.model = model.value;
        };

        Select2.prototype.attached = function attached() {
            var element = $('#' + this.element.key);
            var select2 = $(element).select2({
                allowClear: true,
                width: '100%'
            });

            $(select2).on('change', function (event) {
                if (event.originalEvent) {
                    return;
                }

                var notice = new Event('change', {
                    bubble: false
                });

                $(element)[0].dispatchEvent(notice);
            });
        };

        Select2.prototype.detached = function detached() {
            $('#' + this.element.key).select2('destroy');
        };

        return Select2;
    }()) || _class);
});