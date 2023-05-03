var http=require("http");
http.createServer(function(request,response)
{
    response.writeHead(200,{'Content-Type':"Text/html"});
    response.end("It works..!");
}).listen(9000);
console.log("server is : http://127.0.0.1:9000");