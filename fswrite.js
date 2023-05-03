//~~~~~~~~~~~step 1 ~~~~~~~~~~

// var http=require('http');
// var fs=require('fs');
// http.createServer(function(req,res)
// {
//     fs.writeFile('text.txt','this is node.js',(error,data)=>
//     {
//         res.write(data);
//         res.end();
//     })
// }).listen(8081);
// console.log("http://127.0.0.1:8081/");

//~~~~~~~~~~~ step 2 ~~~~~~~~~~
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res)
{
    fs.readFile('text.txt',(error,data)=>
    {
        res.write(data);
        res.end();
    })
}).listen(8081);
console.log("http://127.0.0.1:8081/");