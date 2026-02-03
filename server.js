require("dotenv").config();
const app = require("./src/app");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
  app.listen(5000, () => console.log("Server running on 5000"));
})
.catch(err => console.log(err));
