// const express = require("express");

import express from "express";
import dotenv from "dotenv";

//routes
import authRoutes from "./Routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

//authenticaiton 
app.use("/api/auth", authRoutes)


app.listen(5000, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`);
});