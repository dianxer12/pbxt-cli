'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VISIBILITY_FILTERS = undefined;
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.setVisibilityFilter = setVisibilityFilter;

var _actiontype = require('./actiontype.js');

var VISIBILITY_FILTERS = exports.VISIBILITY_FILTERS = {
    SHOW_ALL: 'show_all',
    SHOW_COMPLETE: 'show_complete',
    SHOW_ACTIVE: 'show_active'

    /**
     * ActionCreators
     */

};function addTodo(text) {
    return {
        Type: _actiontype.ActionTypes.addTodo,
        Text: text
    };
}

function toggleTodo(index) {
    return {
        Type: _actiontype.ActionTypes.toggleTodo,
        Index: index
    };
}

function setVisibilityFilter(filter) {
    return {
        Type: _actiontype.ActionTypes.setVisibilityFilter,
        Filter: filter
    };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2xpYi9hY3Rpb25zLmpzIl0sIm5hbWVzIjpbImFkZFRvZG8iLCJ0b2dnbGVUb2RvIiwic2V0VmlzaWJpbGl0eUZpbHRlciIsIlZJU0lCSUxJVFlfRklMVEVSUyIsIlNIT1dfQUxMIiwiU0hPV19DT01QTEVURSIsIlNIT1dfQUNUSVZFIiwidGV4dCIsIlR5cGUiLCJUZXh0IiwiaW5kZXgiLCJJbmRleCIsImZpbHRlciIsIkZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBWWlCQSxPLEdBQUFBLE87UUFPQUMsVSxHQUFBQSxVO1FBT0FDLG1CLEdBQUFBLG1COztBQTFCakI7O0FBRU8sSUFBTUMsa0RBQXFCO0FBQzlCQyxjQUFVLFVBRG9CO0FBRTlCQyxtQkFBZSxlQUZlO0FBRzlCQyxpQkFBYTs7QUFHakI7Ozs7QUFOa0MsQ0FBM0IsQ0FVQyxTQUFTTixPQUFULENBQWlCTyxJQUFqQixFQUFzQjtBQUN6QixXQUFPO0FBQ0pDLGNBQU0sd0JBQVlSLE9BRGQ7QUFFSlMsY0FBTUY7QUFGRixLQUFQO0FBSUg7O0FBRU0sU0FBU04sVUFBVCxDQUFvQlMsS0FBcEIsRUFBMEI7QUFDN0IsV0FBTztBQUNIRixjQUFNLHdCQUFZUCxVQURmO0FBRUhVLGVBQU9EO0FBRkosS0FBUDtBQUlIOztBQUVNLFNBQVNSLG1CQUFULENBQTZCVSxNQUE3QixFQUFvQztBQUN2QyxXQUFPO0FBQ0hKLGNBQU0sd0JBQVlOLG1CQURmO0FBRUhXLGdCQUFRRDtBQUZMLEtBQVA7QUFJSCIsImZpbGUiOiJhY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb25UeXBlc30gZnJvbSAnLi9hY3Rpb250eXBlLmpzJ1xuXG5leHBvcnQgY29uc3QgVklTSUJJTElUWV9GSUxURVJTID0ge1xuICAgIFNIT1dfQUxMOiAnc2hvd19hbGwnLFxuICAgIFNIT1dfQ09NUExFVEU6ICdzaG93X2NvbXBsZXRlJyxcbiAgICBTSE9XX0FDVElWRTogJ3Nob3dfYWN0aXZlJ1xufVxuXG4vKipcbiAqIEFjdGlvbkNyZWF0b3JzXG4gKi9cblxuIGV4cG9ydCBmdW5jdGlvbiBhZGRUb2RvKHRleHQpe1xuICAgICByZXR1cm4ge1xuICAgICAgICBUeXBlOiBBY3Rpb25UeXBlcy5hZGRUb2RvLFxuICAgICAgICBUZXh0OiB0ZXh0XG4gICAgIH1cbiB9XG5cbiBleHBvcnQgZnVuY3Rpb24gdG9nZ2xlVG9kbyhpbmRleCl7XG4gICAgIHJldHVybiB7XG4gICAgICAgICBUeXBlOiBBY3Rpb25UeXBlcy50b2dnbGVUb2RvLFxuICAgICAgICAgSW5kZXg6IGluZGV4XG4gICAgIH1cbiB9XG5cbiBleHBvcnQgZnVuY3Rpb24gc2V0VmlzaWJpbGl0eUZpbHRlcihmaWx0ZXIpe1xuICAgICByZXR1cm4ge1xuICAgICAgICAgVHlwZTogQWN0aW9uVHlwZXMuc2V0VmlzaWJpbGl0eUZpbHRlcixcbiAgICAgICAgIEZpbHRlcjogZmlsdGVyXG4gICAgIH1cbiB9Il19