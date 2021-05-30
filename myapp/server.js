const express = require("express");
const app = express();



 app.get("/add/:valor1/:valor2", function(req,res){
    let out = resumen(req)
    let result = out[0]+out[1]
    res.status(200).json({resultado:result})   
 })
//multi
 app.get("/multiply/:valor1/:valor2", function(req,res){
    let out = resumen(req)
    let result = out[0]*out[1]
    res.status(200).json({resultado:result})   
 })

 app.get("/substract/:valor1/:valor2", function(req,res){
    let out = resumen(req)
    let result = out[0]-out[1]
    res.status(200).json({resultado:result})   
 })

 app.get("/divide/:valor1/:valor2", function(req,res){
    let out = resumen(req)
    let result = out[0]/out[1]
    res.status(200).json({resultado:result})   
 })

 function resumen(req){
    let n1 = req.params.valor1
    let n2 = req.params.valor2
    let nn1 = parseInt(n1)
    let nn2 =parseInt(n2)
    return [nn1,nn2]
}

app.listen(3000,() =>console.log("Server is ip and running"));