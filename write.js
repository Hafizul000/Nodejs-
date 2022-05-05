const fs = require('fs');
const testObj = {

    name : 'sajib',
    Email : 'sajib179@gmail.com',
    addresss :{
        city : 'Sylhet',
        Town : 'Sylhet'
    }
}
const  data = JSON.stringify(testObj);

fs.writeFile('./test.Json',data,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('File Write Successful');
    }
})