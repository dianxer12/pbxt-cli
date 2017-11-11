'use strict';

var _combineReducers = require('./combineReducers.js');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var increment = function increment(state, action) {
    if (typeof action['value'] === 'number' && typeof action['distance'] === 'number') {
        return action.value + action.distance * 3;
    }
    return 0;
};

var decrement = function decrement(state, action) {
    if (typeof action['value'] === 'number' && typeof action['distance'] === 'number') {
        return action.value - action.distance;
    }
    return 0;
};

console.log((0, _combineReducers2.default)({ increment: increment, decrement: decrement })({}, { distance: 4 }));
console.log((0, _combineReducers2.default)()({}, { distance: 4 }));