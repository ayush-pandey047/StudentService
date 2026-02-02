import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./student.controller";

const app = express();
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"));

app.use(studentRoutes);

export default app;
