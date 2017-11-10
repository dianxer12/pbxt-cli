"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var combineReducers = function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    reducerKeys.filter(function (key) {
        typeof reducers[key] === "function";
    });

    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var action = arguments[1];

        var updatedState = {};
        var isUpdated = false;
        reducerKeys.forEach(function (key) {
            updatedState[key] = reducers[key](state[key], action);
            isUpdated = isUpdated || updatedState[key] !== state[key];
        });
        return isUpdated ? updatedState : state;
    };
};

exports.default = combineReducers;