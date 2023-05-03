var http=require('http');
var fs=require('fs');
http.createServer(function(req,res)
{
    fs.writeFile('abc.txt','this is my text',(error,data)=>
    {
        if(error) throw error;
        fs.readFile('1.html',(error,data)=>
        {
            if(error) throw error;
            res.write(data);
            res.end();
            console.log("done");
        })
    })
}).listen(8081);
console.log("http://127.0.0.1:8081");