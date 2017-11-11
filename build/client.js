'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getClientFolders = exports.clientVersionMiddleware = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLIENT_VERSION = process.env.CLIENT_VERSION;

var clientVersionMiddleware = exports.clientVersionMiddleware = function clientVersionMiddleware(req, res, next) {
    res.locals.clientFolders = getClientFolders();
    console.log(res.locals.clientFolders);
};

var getClientFolders = exports.getClientFolders = function getClientFolders() {
    console.log(CLIENT_VERSION)
    var CLIENT_FOLDER = _path2.default.resolve(__dirname, '..', '..', 'client', 'build', CLIENT_VERSION);
    var SERVER_FOLDER = _path2.default.join(CLIENT_FOLDER, 'server');
    console.log(CLIENT_FOLDER, SERVER_FOLDER);
    return {
        CLIENT_FOLDER: CLIENT_FOLDER,
        SERVER_FOLDER: SERVER_FOLDER
    };
};