import { Schema, model } from "mongoose";

const StudentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  course: { type: String, required: true }
});

export const StudentModel = model("Student", StudentSchema);