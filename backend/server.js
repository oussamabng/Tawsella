const express = require("express");
const app =   express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./routes/auth");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use("/api", auth);

db = mongoose.connect('mongodb://localhost/tawssela', {useNewUrlParser: true,useUnifiedTopology: true, useCreateIndex: true,
useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
   console.log("hhhh")
     
  });
app.get("/",(req,res)=>{
    console.log("sssaaa");
    res.send("haha")
})
  app.listen(8080,()=>{
    console.log("listening on port 8080")
})