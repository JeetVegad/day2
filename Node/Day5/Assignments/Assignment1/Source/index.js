const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('over',()=>{
    console.log("Times up !!!!Exam Done!!!");
});
eventEmitter.on('start',()=>{
    console.log('All the Best !! Exam Started!!');
});


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
                eventEmitter.emit('start');
            }
        });
    }
    if(req.url === '/over'){
        eventEmitter.emit('over');
        res.write('Exam Over');
        res.end();
    }
});
server.listen(3000,()=>{
    console.log('Listining at 3000')
})

