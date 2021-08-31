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
  let currentday = new Date().getDay();
  let day = "";
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  if (currentday === 6 || currentday === 0 ){
    // res.send("<h1>Yeppy! its weekend !!</h1>");
    // res.sendFile( __dirname + "/weekend.html" );
    day = weekday[currentday]  //"restingday";
  }else{
    // res.send("<h1>Boo!, Its working day..</h1>");
    // res.sendFile( __dirname + "/weekday.html" );
    day = weekday[currentday] //"workingday";
  };

  res.render("list.ejs", {thisDay:day});
  // res.sendFile(__dirname +"/index.html")
});

/////////////////////////////// POST ROUTE /////////////////////



/////////////////////////////// LISTEN PORT /////////////////////

app.listen(port, () =>{
  console.log(`App is listening @ port http://localhost:${5000}`)
})
