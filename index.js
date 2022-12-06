const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
let lists = ['Buy Food','Cook Food','Eat Food']
app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday :"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  }
  var day = today.toLocaleDateString('en-US',options)
  res.render("list",{kindOfDay:day,listData:lists})
});
app.post("/",(req, res)=>{
   let list = req.body.todo
   lists.push(list)
  res.redirect("/")
})
app.listen(8000, (req, res) => {
  console.log("App is running on the port 8000");
});
