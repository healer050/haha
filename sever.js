//引入http模块

var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    res.write("哈哈");
    res.end();
}).listen(8880);