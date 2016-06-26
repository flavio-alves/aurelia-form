'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, computedFrom, _createClass, _dec, _dec2, _dec3, _desc, _value, _class, _descriptor, _descriptor2, FormGroup;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

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

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('FormGroup', FormGroup = (_dec = computedFrom('element'), _dec2 = computedFrom('message'), _dec3 = computedFrom('element'), (_class = function () {
        function FormGroup() {
          _classCallCheck(this, FormGroup);

          _initDefineProp(this, 'element', _descriptor, this);

          _initDefineProp(this, 'message', _descriptor2, this);
        }

        _createClass(FormGroup, [{
          key: 'showsLabel',
          get: function get() {
            return this.element.label !== false;
          }
        }, {
          key: 'showsMessage',
          get: function get() {
            return !!this.message;
          }
        }, {
          key: 'labelText',
          get: function get() {
            return this.element.label || this.element.key;
          }
        }]);

        return FormGroup;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'element', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'message', [bindable], {
        enumerable: true,
        initializer: null
      }), _applyDecoratedDescriptor(_class.prototype, 'showsLabel', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'showsLabel'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'showsMessage', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'showsMessage'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'labelText', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'labelText'), _class.prototype)), _class)));

      _export('FormGroup', FormGroup);
    }
  };
});