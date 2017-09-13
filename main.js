const net = require('net');

const server = net.createServer();

function startServer(port,ip){
    return new Promise((resolove,reject) => {
        server.listen(port,ip);
        server.on('error',()=>{
            reject();
            server.close();
            console.log('server is runnning in error!!');
        });
        server.on('listening',()=>{
            resolove();
            console.log('server is listenning on port ',port,' and host is ',ip);
            console.log('inside bounded server address is ', server.address());
        });
        
    });
}

startServer(3000,'localhost');