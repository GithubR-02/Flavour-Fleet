const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

const {MongoClient}=require('mongodb');
const url='mongodb+srv://React_02:Naveen02@cluster0.4bwikds.mongodb.net/';
const database='mongodbVSCodePlaygroundDB';
const client=new MongoClient(url);
const response={};

async function getData()
{
    let result=await client.connect();
    let db=result.db(database);
    let collection=db.collection('restaurant1_Menu');
    let response=await collection.find({}).toArray();
    response.forEach(function test(n){
        console.log(n.item);
    })
    app.get("/orders", function(req, res) {
        res.send(response);
      });
    
    let collection2=db.collection('featured_Restaurants');
    let response2=await collection2.find({}).toArray();
    response2.forEach(function test(n){
        console.log(n.restaurant_name);
    })
    app.get("/menu_restaurants", function(req, res) {
        res.send(response2);
      });

    let collection3=db.collection('featured_Items');
    let response3=await collection3.find({}).toArray();
    response3.forEach(function test(n){
        console.log(n.item_name);
    })
    app.get("/menu_items", function(req, res) {
        res.send(response3);
      });

    let port = process.env.PORT;
    if(port == null || port == "") {
        port = 5000;
      }
    app.listen(port, function() {
       console.log("Server started successfully");
      });
}

getData();

