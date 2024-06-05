require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");

const connectDB = require("./database");

app.use(
  cors({
    origin: [
      "http://127.0.0.1:3000",
      process.env.CLIENT_URL,
      // anyother ip address
    ],
    credentials: true, // Allow credentials (e.g., cookies)
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const UserRoute = require("./routes/UserRoute");
app.use("/user", UserRoute);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server is running on ${process.env.IP}:${process.env.PORT}`);
});
