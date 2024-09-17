import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/UserRoute.js";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create server
const PORT = process.env.PORT || 5000;
const app = express();

// Connect to database
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Middleware configurations
app.use(cors());
app.use(express.json());
app.use(userRoute);

// Run server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
