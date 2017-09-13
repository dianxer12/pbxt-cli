module.exports = (cwd,args) => {
    cwd = cwd || process.cwd();
    console.log('current folder is ',cwd);
    args = args || process.argv;
    console.log('current parameters are ', args);
};