var fs = require('fs');

const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

readline.question('what is your name :',name => {
 fs.appendFile('person.txt',`Hello ${name}`,function(err){
    if(err) throw err;
    console.log('Saved!!!');
 })
    readline.close();
})

// fs.writeFile('person.txt','Hello World',function(err){
//     if(err) throw err;
//     console.log('Created');
// })


// fs.appendFile('person.txt',', Hello India',function(err){
//     if(err) throw err;
//     console.log('Saved!!!');
// })