const http = require('http');
const fs = require('fs');
const url = require('url');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('person.json',(err,data)=>{
            if(err){
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        })
    }

    if(req.url === '/product?param1=5&param2=10'){
        const paramObject = url.parse(req.url, true).query;
        
        res.write(`Sum of params is ${parseInt(paramObject.param1) + parseInt(paramObject.param2)}`);
        res.end();
    }

    if(req.url === '/str?name=Jeet'){
        let obj = url.parse(req.url,true).query;
        let vowel = 'aeiou';
        for(let i =0 ; i< obj.name.length ; i++){
        if(vowel.includes(obj.name[i])){
            res.write(`My name is ${obj.name} & first vowel of my name is ${obj.name[i]}`);
            res.end();
            
        }
    }
    }
});

server.listen(3001,()=>{
    console.log("Listening on 3001 ......");
})