import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  experience: Number,
  area: String,
  fee: Number,
  availability: String,
});

export default mongoose.models.Doctor || mongoose.model('Doctor', DoctorSchema);
