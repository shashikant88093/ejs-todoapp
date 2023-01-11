const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.MONGODBURL,"ccccv");
mongoose.connect(process.env.MONGODBURL, {
  useNewUrlParser: false,
});

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday :"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  }
  var day = today.toLocaleDateString('en-US',options)
  //get form db
  Item.find({},(err,foundItems)=>{
    if(err){
      console.log(err);
    }else{
      console.log(foundItems);
      res.render("list",{kindOfDay:day,listData:foundItems})
    }
  })
  // res.render("list",{kindOfDay:day,listData:lists})
});
const itemsSchema = new mongoose.Schema({
  name: String
});
const Item = mongoose.model("Item", itemsSchema);
app.post("/",(req, res)=>{
   let list = req.body.todo
   Item.insertMany({name:list},(err)=>{
      if(err){
        console.log(err);
      }else{
        console.log("Successfully added");
      
  res.redirect("/")
      }
    })
   
})
app.post("/delete",(req,res)=>{
  const id = req.body.checkbox.trim();
  console.log(req.body.checkbox);
  Item.findByIdAndRemove(id,(err)=>{

    if(err){
      console.log(err);
    }else{
      console.log("Successfully deleted");
      res.redirect("/")
    }
  })
}
)

app.listen(8000, (req, res) => {
  console.log("App is running on the port 8000");
});
