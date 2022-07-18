const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");
const userRoutes = require("./backend/routes/userRoutes");
const topicRoutes = require("./backend/routes/topicRoutes");
const connectDB = require("./backend/config/db");
dotenv.config();
app.use(express.json());
app.listen(PORT, console.log(`server is running on port no. ${PORT}`));
connectDB();
app.get("/", (req, res) => {
  res.send("api is running here...");
});
app.use("/api/users", userRoutes);
app.use("/api/topics", topicRoutes);
// here
