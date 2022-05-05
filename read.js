const fs = require('fs');

 fs.readFile('./test.json',(err,data)=> {
     if(err){
         console.log(err)
     }
     else{
         let obj = JSON.parse(data)
         console.log(obj);
     }
 })