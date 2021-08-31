/////////////////////////////// RUN nodeJs /////////////////////

console.log("nodeJs server is running....")

/////////////////////////////// CONSTANTS //////////////////////

const port = process.env.PORT || 5000;

/////////////////////////////// REQUIRE MODULES /////////////////////

let express = require("express");
let request = require("request");
let bodyParser= require("body-parser");
let ejs = require('ejs');

/////////////////////////////// CONFIGURE APP /////////////////////

let app = express()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

/////////////////////////////// GET ROUTE /////////////////////

app.get("/",(req, res)=>{
  let currentday = new Date().getDay();
  if (currentday === 6 || currentday === 0 ){
    // res.send("<h1>Yeppy! its weekend !!</h1>");
    res.sendFile( __dirname + "/weekend.html" );
  }else{
    // res.send("<h1>Boo!, Its working day..</h1>");
    res.sendFile( __dirname + "/weekday.html" );

  };

  // ejs.render()
  // res.sendFile(__dirname +"/index.html")
});

/////////////////////////////// POST ROUTE /////////////////////



/////////////////////////////// LISTEN PORT /////////////////////

app.listen(port, () =>{
  console.log(`App is listening @ port http://localhost:${5000}`)
})
