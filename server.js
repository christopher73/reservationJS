var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = process.env.PORT || 8080; //checks env var if not uses 8080

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

let reservations = [];
let waitingList = [];

//==========GET>>>>>>>>>>>>

router.get("/reservations", function(_, res) {
  res.send(reservations);
});

//==========POST>>>>>>>>>>>>

router.post("/reserve", function(req, res) {
  console.log(req.body);
  let m_reservation = add_Reservation(req.body);
  res.send(m_reservation);
  //console.log(m_reservation);
});

app.use("/api", router); //we add "/api" to all our routes

app.listen(port);
console.log(`server running on ${port}`);

function add_Reservation(reservation) {
  if (reservations.length < 5) {
    reservations.push(reservation);
    return reservations;
  } else {
    waitingList.push(reservation);
    return "reservation in on waiting list ...";
  }
}
