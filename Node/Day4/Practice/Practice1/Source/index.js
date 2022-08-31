const path = require('path');
const http = require('http');
var pathObj1 = path.parse(__filename);
var pathObj2 = path.parse(__dirname);

 console.log(pathObj1);
 console.log(pathObj2);

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello People');
        res.end();
    }
    if(req.url === '/api/bot'){
        res.write(JSON.stringify(["Hello","bot","peoples"]));
        res.end();
    }
});

 server.on('connection',(socket)=>{
     console.log('New Connection .......')
 })

server.listen(8000);

console.log("Listening on 8000 ....")