// var b=5;
// exports.a=b

b="it is in testModule.js"
function add_ab(a,b){
    return a+b;
}
var add_cd=function(c,d){
    return c-d;
}
add_ef=(e,f)=>{
    return e*f
}
function add_gf(g,f){
    return g/f
}

// exports.add_ab1=add_ab;//前面是新的，被引用的，后面是这个函数里面的
// exports.add_cd=add_cd;
// exports.add_ef=add_ef;
// exports.add_gf=add_gf;
module.exports={add_ab,add_cd,add_ef,add_gf}