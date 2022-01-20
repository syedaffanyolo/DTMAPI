const express = require("express");
const app = express();
const importDatagr = require("./grapi.json");
const importDatan = require("./napi.json");
const importDatad = require("./dapi.json");
const importDataDetailGr = require("./detailgr.json");
const importDataDetailN = require("./detailn.json");
const importDataDetailD = require("./detaild.json");
const importDataShopN = require("./shopn.json");
let port = process.env.PORT || 3000;

app.get("/", function(req,res){
    res.send("hello");
});

app.get("/detailgr", function(req,res){
    res.send(importDataDetailGr);
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