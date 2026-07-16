const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const leadsRoutes = require("./src/routes/leadsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/leads", leadsRoutes);

app.get("/", (req, res) => {
  res.send("AI Lead Management System API is running 🚀");
});

const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
});