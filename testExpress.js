const express=require('express')
const app=express()
const ejs =require('ejs')
///hhiohioijoi
const cal=require('./testModule.js')
app.use('/',express.static('public'))
app.use('/',express.static('private'))
app.use('/',express.static('href'))

app.use('/href2',express.static('html2'))
app.use(express.json()) 

app.use(express.urlencoded({extended:false}))
// const port =3000
var dataA=0.0;
var dataB=0.0;
app.post('/input',function(req,res,next){
    dataA=parseFloat(req.body.fname);
    dataB=parseFloat(req.body.fname2);
    oper=req.body.a1;
    console.log(oper)
    next();
})
app.get('/input',function(req,res,next){
    console.log('oper');
    dataA=parseFloat(req.query.fname);
    dataB=parseFloat(req.query.fname2);
    console.log('oper');
    oper=req.query.a1;
    console.log(oper);
    next();
})
app.use('/input',function(req,res,next){
    dataA=parseFloat(req.body.fname);
    dataB=parseFloat(req.body.fname2);
    oper=req.body.a1;
    console.log(oper);
    next();
})
app.use('/input',function(req,res,next){
    console.log(oper);
    if(oper==='+'){
    ejs.renderFile('result.html',{result:cal.add_ab(dataA,dataB)},   function(err,str){

        if(err){console.log("File is error.")}
        else{
            res.statusCode=200;
            res.setHeader('Content-Type','text/html')
            res.send(str);
        }
    })
}
else if(oper==='-'){
    ejs.renderFile('result.html',{result:cal.add_cd(dataA,dataB)},   function(err,str){

        if(err){console.log("File is error.")}
        else{
            res.statusCode=200;
            res.setHeader('Content-Type','text/html')
            res.send(str);
        }
    })
}
else if(oper==='*'){
    ejs.renderFile('result.html',{result:cal.add_ef(dataA,dataB)},   function(err,str){

        if(err){console.log("File is error.")}
        else{
            res.statusCode=200;
            res.setHeader('Content-Type','text/html')
            res.send(str);
        }
    })
}
else if(oper==='/'){
    ejs.renderFile('result.html',{result:cal.add_gf(dataA,dataB)},   function(err,str){

        if(err){console.log("File is error.")}
        else{
            res.statusCode=200;
            res.setHeader('Content-Type','text/html')
            res.send(str);
        }
    })
}
else {
    console.log('cannot find the right oper');
}
next();
})
app.listen(3002)
