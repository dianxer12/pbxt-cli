const Writable = require('stream').Writable;
const chalk = require('chalk');
const bunyan = require('bunyan');


class ConsoleStream extends Writable {
    constructor(env) {
      super();
      this.debug = env.debug;
    }
  }


function createLogger(options){
    options = options || {};
    
    var streams = [];
    
    if(!options.silent){
        streams.push({
            type: 'raw',
            level: options.debug ? 'trace' : 'info',
            stream: new ConsoleStream(options)
        });
    }
    
    if (options.debug){
        streams.push({
            level : 'trace',
            path: 'debug.log'
        });
    }
    
    let logger = bunyan.createLogger({
        name: options.name || 'pbxt',
        streams: streams,
        serializers:{
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