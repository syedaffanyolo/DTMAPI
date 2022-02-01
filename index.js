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
const importDataShopGR = require("./detailgrs.json");
const importDataShopGR1 = require("./detailgr1s.json");
const importDataShopGR2 = require("./detailgr2s.json");
const importDataShopGR3 = require("./detailgr3s.json");
const importDataShopn = require("./detailns.json");
const importDataShopn1 = require("./detailn1s.json");
const importDataShopn2 = require("./detailn2s.json");
const importDataShopn3 = require("./detailn3s.json");
const importDataShopd = require("./detailds.json");
const importDataShopd1 = require("./detaild1s.json");
const importDataShopd2 = require("./detaild2s.json");
const importDataShopd3 = require("./detaild3s.json");
const importDataShopd4 = require("./detaild4s.json");
const importDataShopd5 = require("./detaild5s.json");
const importDataShopd6 = require("./detaild6s.json");
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
app.get("/detailn1", function(req,res){
    res.send(importDataDetailN);
});
app.get("/detailn2", function(req,res){
    res.send(importDataDetailN);
});
app.get("/detailn3", function(req,res){
    res.send(importDataDetailN);
});

app.get("/detaild", function(req,res){
    res.send(importDataDetailD);
});
app.get("/detaild1", function(req,res){
    res.send(importDataDetailD);
});
app.get("/detaild2", function(req,res){
    res.send(importDataDetailD);
});
app.get("/detaild3", function(req,res){
    res.send(importDataDetailD);
});
app.get("/detaild4", function(req,res){
    res.send(importDataDetailD);
});
app.get("/detaild5", function(req,res){
    res.send(importDataDetailD);
});
app.get("/detaild6", function(req,res){
    res.send(importDataDetailD);
});

app.get("/shopgr", function(req,res){
    res.send(importDataShopGR);
});
app.get("/shopgr1", function(req,res){
    res.send(importDataShopGR);
});
app.get("/shopgr2", function(req,res){
    res.send(importDataShopGR);
});
app.get("/shopgr3", function(req,res){
    res.send(importDataShopGR);
});
app.get("/shopn", function(req,res){
    res.send(importDataShopn);
});
app.get("/shopn1", function(req,res){
    res.send(importDataShopn1);
});
app.get("/shopn2", function(req,res){
    res.send(importDataShopn2);
});
app.get("/shopn3", function(req,res){
    res.send(importDataShopn3);
});
app.get("/shopd", function(req,res){
    res.send(importDataShopd);
});
app.get("/shopd1", function(req,res){
    res.send(importDataShopd1);
});
app.get("/shopd2", function(req,res){
    res.send(importDataShopd2);
});
app.get("/shopd3", function(req,res){
    res.send(importDataShopd3);
});
app.get("/shopd4", function(req,res){
    res.send(importDataShopd4);
});
app.get("/shopd5", function(req,res){
    res.send(importDataShopd5);
});
app.get("/shopd6", function(req,res){
    res.send(importDataShopd6);
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