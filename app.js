//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items = ["buy food", "cook food", "eat food"];
const workListItems = [];

const day = date.getDay();

app.get("/", function(req, res){

    res.render("Tlist", { listTitle: day, newListItems: items });
});

app.get("/work", function(req, res){
    res.render("Tlist", {  listTitle: "Worklist",  newListItems: workListItems })
});

app.post("/", function(req, res){
    // console.log(req.body);
    const item = req.body.newItem;
    if(req.body.list === day){
        items.push(item);
        res.redirect("/");
    } else {
        workListItems.push(item);
        res.redirect("/work");
    }

});

app.listen(3000, function(){
    console.log("server started at port 3000");
});
