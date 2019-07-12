var uname="xixi";
// exports.暴漏数据的名子=要暴漏的数据
function userFun(){
    console.log("我是函数暴漏")
}

exports.uname=uname;
// 暴漏函数  不能加（）不能加（）不能加（）不能加（）不能加（）不能加（）不能加（）
exports.userFun=userFun;


