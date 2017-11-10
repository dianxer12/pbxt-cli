'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _client = require('./client');

var _localAssetServer = require('./modules/local-asset-server');

var _localAssetServer2 = _interopRequireDefault(_localAssetServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//internal dependencies
var ENV = process.env.NODE_ENV || 'development';
var PORT = process.env.PORT || 2000;

var app = (0, _express2.default)();
app.use(_client.clientVersionMiddleware);

if (process.env.NODE_ENV !== 'production') {
    app.get('/assets/*', _localAssetServer2.default);
}

app.set('port', PORT);
app.listen(app.get('port'), function () {
    console.info('Server is listening on ' + app.get('port'));
});

exports.default = app;