// var 名字（引用模块的名字） = require("引用模块文件的地址  可以不用加后缀");
var a=require("./a");
var me=require("./me")


// console.log(a.uname);
// a.userFun();


var newMe=new me("我是李大壮");
console.log(newMe.uname);



