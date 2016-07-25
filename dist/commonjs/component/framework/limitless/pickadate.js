'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PickadateCustomElement = exports.PickadateCustomElement = function () {
    function PickadateCustomElement() {
        _classCallCheck(this, PickadateCustomElement);
    }

    PickadateCustomElement.prototype.activate = function activate(model) {
        this.element = model.element;
        this.model = model.value;
    };

    PickadateCustomElement.prototype.attached = function attached() {
        var element = $('#' + this.element.key);
        var pickadate = $(element).pickadate({
            format: 'yyyy-mm-dd',
            editable: false
        });

        $(pickadate).on('change', function (event) {
            if (event.originalEvent) {
                return;
            }

            var notice = new Event('change', {
                bubble: false
            });

            $(element)[0].dispatchEvent(notice);
        });
    };

    PickadateCustomElement.prototype.detached = function detached() {};

    return PickadateCustomElement;
}();