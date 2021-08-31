/////////////////////////////// RUN nodeJs /////////////////////

console.log("nodeJs server is running....")

/////////////////////////////// REQUIRE MODULES /////////////////////

const express = require("express");
const request = require("request");
const bodyParser= require("body-parser");
const ejs = require('ejs');


/////////////////////////////// CONFIGURE APP /////////////////////

const app = express()
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

/////////////////////////////// CONSTANTS /////////////////////

var homeItems = [];
var workItems =[]

/////////////////////////////// GET ROUTE /////////////////////

app.get("/",(req, res)=>{
  let today = new Date();
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }
  let day = today.toLocaleDateString("en-US", options);

  res.render("list.ejs", {listTitle:day, newItems:homeItems});
});


app.get("/work", (req, res)=>{

  res.render("list.ejs", {listTitle:"work list", newItems:workItems});
});

app.get("/about", (req, res)=>{

  res.render("about");
});

app.get("/contact", (req, res)=>{

  res.render("contact");
});


/////////////////////////////// POST ROUTE /////////////////////

app.post("/", (req, res)=>{

  let item = req.body.newItem;

  if (req.body.list === "work"){
    workItems.push(item)
    res.redirect("/work");
  }else{
    homeItems.push(item);
    console.log(req.body.list);
    res.redirect("/");
  }


});






/////////////////////////////// LISTEN PORT /////////////////////

app.listen(port, () =>{
  console.log(`App is listening @ port http://localhost:${5000}`)
})
