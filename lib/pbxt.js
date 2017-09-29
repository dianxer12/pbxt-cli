const promise = require('bluebird');
const realFS = require('fs');
const readFile = promise.promisify(realFS.readFile);
const pathFn = require('path');

function compose(...funcs){
    return function(...args){
        return funcs.reduce(
            (a,b,c,d) => {
                console.log(a,b,c,args);
                a(b(...args));
            }
        );
    }
}

function f1(x){
    return x*x;
}
function f2(x){
    return x+x;
}
function f3(x){
    return x*2;
}
function f4(x){
    return x*2;
}
function f5(x){
    return x*2;
}
function f6(x){
    return x*2;
}


module.exports = (cwd,args) => {
    cwd = cwd || process.cwd();
    console.log('current folder is ',cwd);
    args = args || process.argv;
    console.log('current parameters are ', args);
    console.log(pathFn.join(cwd,'package.json'));
    readFile(pathFn.join(cwd,'package.json')).then((content)=>{
        let json = JSON.parse(content);
        console.log(json.bin.pb);
    });

    console.log('start composing');
    let fnarr = [f1,f2,f3];
    console.log('the answer is',compose(f1,f2,f3,f4,f5,f6)(3));
};