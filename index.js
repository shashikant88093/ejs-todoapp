const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  var day = "";

  switch (currentDay) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tueday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      console.log("Error : current day is equal to : " + currentDay)
  }
  // if (currentDay === 6 || currentDay === 0) {
    // res.sendFile(__dirname + "/weekend.html");
  // } else {
    // res.sendFile(__dirname + "/weekday.html");
    // day = "Weekday"

  // }
  res.render("list",{kindOfDay:day})

});

app.listen(8000, (req, res) => {
  console.log("App is running on the port 8000");
});
