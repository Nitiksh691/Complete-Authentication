import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import connectDB from "./utils/db.js";

import authRoutes from "./routes/auth.js"
import homeRoutes from "./routes/Home.js" // ✅ ADDED: Import home routes

const app = express()
dotenv.config();

// ✅ FIXED: Removed duplicate cors() call
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(cookieParser());

// Parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes); 

connectDB()

app.listen(8000, () => {
    console.log("Server started on port 8000");
})
