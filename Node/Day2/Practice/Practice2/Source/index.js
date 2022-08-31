var fs = require('fs');

fs.writeFile('txt1.txt','First Text File',function(err){
    if(err) throw err;
    console.log("Created")
})


fs.writeFile('txt2.txt','Second Text File',function(err){
    if(err) throw err;
    console.log("Created")
})


function readFile(fileName){
    return new Promise(resolve => {
        fs.readFile(fileName,function(err,data){
            if (err) throw err;

            console.log(fileName)
            console.log(data.toString())
        })
        resolve();
    })
}

async function display(){
    await readFile('txt1.txt');
    await readFile('txt2.txt');
}

display();