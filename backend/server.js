const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("./routes/auth.js", authRoute);
app.use("./routes/users", userRoute);
app.use("./routes/movies", movieRoute);
app.use("./routes/lists", listRoute);

app.listen(process.env.PORT, () => {
  console.log("server is up");
});
