'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('../reducers/constants.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionFactory = function () {
    function ActionFactory() {
        _classCallCheck(this, ActionFactory);
    }

    _createClass(ActionFactory, [{
        key: 'TodoAction',
        value: function TodoAction(text) {
            return {
                type: _constants.ActionType.TODO,
                description: text
            };
        }
    }, {
        key: 'ToggleAction',
        value: function ToggleAction(index, status) {
            return {
                type: _constants.ActionType.TOGGLE,
                index: index,
                status: status
            };
        }
    }, {
        key: 'SetVisibility',
        value: function SetVisibility(filter) {
            return {
                type: _constants.ActionType.TOGGLE,
                filter: filter
            };
        }
    }], [{
        key: 'getActionFactory',
        value: function getActionFactory() {
            if (!this[factory]) return new ActionFactory();
        }
    }]);

    return ActionFactory;
}();