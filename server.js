const http = require('http');


const myServer = http.createServer((req,res)=>{

    console.log(req.url)
    res.end('<h1>My server now open</h1>');
})

myServer.listen(5151,()=>{
    console.log('Server is Running on port:5151')
})
