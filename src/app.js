const express = require("express");
const cors = require("cors");

const locationRoutes = require("./routes/location.routes");
const photoRoutes = require("./routes/photo.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/locations", locationRoutes);
app.use("/api/photos", photoRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
