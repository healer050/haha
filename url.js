var http = require("http");
var url = require("url");
http.createServer(function(req,res){

    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var urlpath=url.parse(req.url);
    // if(urlpath.pathname=="/favicon.ico"){
    //     return;
    // }
if (urlpath.pathname=="/reg"){
    // console.log("注册");
    res.end("您执行了注册的后台功能");
}else if(urlpath.pathname=="/login"){
    // console.log("登录");
    res.end("您执行了登录的后台功能");
    
}else{
    res.end("您的请求有误  请核实后在进行请求");
}

console.log(url.parse(req.url))

res.end()

}).listen(8888);