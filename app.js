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

/////////////////////////////// GET ROUTE /////////////////////

app.get("/",(req, res)=>{
  let today = new Date();
  let options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  }
  let day = today.toLocaleDateString("en-US", options);

  res.render("list.ejs", {thisDay:day});
});

/////////////////////////////// POST ROUTE /////////////////////



/////////////////////////////// LISTEN PORT /////////////////////

app.listen(port, () =>{
  console.log(`App is listening @ port http://localhost:${5000}`)
})
