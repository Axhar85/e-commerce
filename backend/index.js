console.log("Hello World backend");

/*

//packages
import path from "path";
import express from "express";
import dotenv, { config } from "dotenv";
import cookieParser from "cookie-parser";
//import router from "./routes/userRoutes.js";


//utiles

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";


dotenv.config()

const port = process.env.PORT || 5000;


connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
    res.send("Hello World backend");
});

app.listen(port, () => console.log(`Server runing on port: ${port}`));
*/

import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// User routes
app.use("/api/users", userRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello World backend");
});

app.listen(port, () => console.log(`Server running on port: ${port}`));