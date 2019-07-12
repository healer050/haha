var http=require("http");
var url=require("url");
http.createServer(function(req,res){
        // 发送头标签（描述页面内容/字符集）  
        // 内容类型  Content-type
        //指定内容类型 text/plain (文本类型)  text/html( html类型)
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        // res.end("你好");
        // 返回一段html标签
        // res.end("<h1>我是返回的内容</h1>")

        // url模块  方法
        var urlpath=url.parse(req.url)
        // 阻止二此请求  favicon.ico
        // if(urlpath.pathname=="/favicon.ico"){
        //     return;
        // }


        // 完成路由  通过前台url传递过来的不同请求来执行不同的后台功能
        // 1.先要判断命令是什么(url中得到)
            if(urlpath.pathname=="/index"){
                res.end("啊啊啊indexindex");
            }else if(urlpath.pathname=="/home"){
                res.end("呵呵homehome")
            }

        // url.parse()把url内容转换成对象
        console.log(url.parse(req.url))

        res.end()
}).listen(3001)