import {Writable} from 'stream';
import * as chalk from 'chalk';
import * as util from 'util';

function ConsoleStream(env){
    Writable.call(this);
};

util.inherits(ConsoleStream,Writable);

class ConsoleStream extends Writable{
    constructor(env){
        super();
        this.debug = env.debug;
    }
}

function formatTime(date){
    
    return date instanceof Date ? date.toISOString() : 'error date';
}

exports = ConsoleStream;