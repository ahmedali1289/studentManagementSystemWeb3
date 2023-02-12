import mongoose from "mongoose";
const OtpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  otp: {
    type: Number,
    required: true
  },
  expiration: {
    type: Boolean,
    required: true,
    default: false
  }
});
module.exports=mongoose.models.Otp || mongoose.model('Otp', OtpSchema);