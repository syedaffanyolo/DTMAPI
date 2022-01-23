const express = require("express");
const app = express();
const importDatagr = require("./grapi.json");
const importDatan = require("./napi.json");
const importDatad = require("./dapi.json");
const importDataDetailGr = require("./detailgr.json");
const importDataDetailGr1 = require("./detailgr1.json");
const importDataDetailGr2 = require("./detailgr2.json");
const importDataDetailGr3 = require("./detailgr3.json");
const importDataDetailN = require("./detailn.json");
const importDataDetailD = require("./detaild.json");
const importDataShopN = require("./shopn.json");
let port = process.env.PORT || 3000;
//lala
app.get("/", function(req,res){
    res.send("hello");
});

app.get("/detailgr", function(req,res){
    res.send(importDataDetailGr);
});
app.get("/detailgr1", function(req,res){
    res.send(importDataDetailGr1);
});
app.get("/detailgr2", function(req,res){
    res.send(importDataDetailGr2);
});
app.get("/detailgr3", function(req,res){
    res.send(importDataDetailGr3);
});

app.get("/detailn", function(req,res){
    res.send(importDataDetailN);
});

app.get("/detaild", function(req,res){
    res.send(importDataDetailD);
});

app.get("/shopn", function(req,res){
    res.send(importDataShopN);
});

app.get("/grapi", function(req,res){
    res.send(importDatagr);
});

app.get("/napi", function(req,res){
    res.send(importDatan);
});

app.get("/dapi", function(req,res){
    res.send(importDatad);
});

app.listen(port, ()=>{
console.log(port);
});