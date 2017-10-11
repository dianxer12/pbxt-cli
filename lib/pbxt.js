const promise = require('bluebird');
const realFS = require('fs');
const readFile = promise.promisify(realFS.readFile);
const pathFn = require('path');

module.exports = (cwd,args) => {
    var log = Logger();
    cwd = cwd || process.cwd();
    console.log('current folder is ',cwd);
    args = args || process.argv;
    console.log('current parameters are ', args);
    console.log(pathFn.join(cwd,'package.json'));
    readFile(pathFn.join(cwd,'package.json')).then((content)=>{
        let json = JSON.parse(content);
        console.log(json.bin.pb);
    });

};