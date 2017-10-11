const Logger = require('./log/log.js');

module.exports = (cwd,args) => {
    var log = Logger();
    cwd = cwd || process.cwd();
    console.log('current folder is ',cwd);
    args = args || process.argv;
    console.log('current parameters are ', args);
    //log.d('this is debug information');
    log.info('this is info information');
    //log.w('this is warning information');
};