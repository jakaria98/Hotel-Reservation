const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", require("./routers/userRoute.js"));
app.use("/api/rooms", require("./routers/roomRoute.js"));
app.use("/api/all_guests", require("./routers/guestRoute.js"));

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our application",
  });
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`SERVER is running on PORT ${PORT}`);
  mongoose.connect(
    "mongodb://localhost/hotel-reservation",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Database connected");
    }
  );
});
