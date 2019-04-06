var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080; //checks env var if not uses 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

let reservations = [];
let waitingList = [];

router.get("/reservations", function(req, res) {
  res.json({
    message: "hello in json format "
  });
});
router.post("/reserve", function(req, res) {
  reservations.push(req.body);
  res.send("thanks for your reservation");
  console.log(reservations);
});
app.use("/api", router); //we add /api to all our routes

app.listen(port);
console.log(`server running on ${port}`);
