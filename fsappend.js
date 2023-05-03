// ~~~~~~~~~~~~~Step 1~~~~~~~~~~~~~~~~

// var http=require('http');
// var fs=require('fs');
// http.createServer(function(req,res)
// {
//     fs.appendFile('text.txt',' Hii Students',(error,data)=>
//     {
//         res.write(data);
//         res.end();
//     })
// }).listen(8081);
// console.log("http://127.0.0.1:8081/");

//~~~~~~~~~~~~~Step 2~~~~~~~~~~~~~~~~
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