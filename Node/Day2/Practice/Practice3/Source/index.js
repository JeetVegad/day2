const fs = require('fs');
// fs.readFile('address.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         let arr = data.split(' ').filter((item)=>item !== ' ');
//         let vowel = 'aeiou'
//         let count = 0;

//         arr.array.forEach(element => {
//             if(!vowel.includes(element.toLowerCase())){
//                 count++;
//             }
//         });
//         console.log('Total consonants ,',count)
//     }
// })
fs.rm('person.txt',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("File Removed");
    }
});