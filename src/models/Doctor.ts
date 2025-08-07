// src/models/Doctor.ts

import mongoose, { Schema, model, models } from 'mongoose';

const DoctorSchema = new Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  location: { type: String, required: true },
  experience: { type: Number },
  image: { type: String },
});

const Doctor = models.Doctor || model('Doctor', DoctorSchema);
export default Doctor;
