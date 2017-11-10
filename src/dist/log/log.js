'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Writable = require('stream').Writable;
var chalk = require('chalk');
var bunyan = require('bunyan');

var ConsoleStream = function (_Writable) {
    _inherits(ConsoleStream, _Writable);

    function ConsoleStream(env) {
        _classCallCheck(this, ConsoleStream);

        var _this = _possibleConstructorReturn(this, (ConsoleStream.__proto__ || Object.getPrototypeOf(ConsoleStream)).call(this));

        _this.debug = env.debug;
        return _this;
    }

    return ConsoleStream;
}(Writable);

function createLogger(options) {
    options = options || {};

    var streams = [];

    if (!options.silent) {
        streams.push({
            type: 'raw',
            level: options.debug ? 'trace' : 'info',
            stream: new ConsoleStream(options)
        });
    }

    if (options.debug) {
        streams.push({
            level: 'trace',
            path: 'debug.log'
        });
    }

    var logger = bunyan.createLogger({
        name: options.name || 'pbxt',
        streams: streams,
        serializers: {
            err: bunyan.stdSerializers.err
        }
    });

    logger.d = logger.debug;
    logger.i = logger.info;
    logger.w = logger.warn;
    logger.e = logger.error;
    logger.log = logger.info;

    return logger;
}

module.exports = createLogger;