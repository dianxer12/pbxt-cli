'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var localAssetServer = function localAssetServer(req, res) {
    var file = req.params[0] ? req.params[0] : 'index.html';
    console.log('file', file);
    res.sendFile('assets/' + file, {
        root: res.locals.clientFolders.CLIENT_FOLDER
    });
};

exports.default = localAssetServer;