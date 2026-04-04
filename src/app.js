const express = require("express");
const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const recordRoutes = require("./routes/recordRoutes");
app.use("/records", recordRoutes);

module.exports = app;