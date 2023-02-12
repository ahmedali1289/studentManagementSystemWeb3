import connect from "./utils/db";
import User from "./utils/userschema";
import Otp from "./utils/otpschema";

connect();

export default async function handler(req, res) {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ status: "User not found" });
  }

  const existingOtp = await Otp.findOne({ email });
  let otp = Math.floor(1000 + Math.random() * 9000);
  let newOtp;

  if (existingOtp) {
    existingOtp.otp = otp;
    existingOtp.expiration = false;
    newOtp = await existingOtp.save();
  } else {
    newOtp = new Otp({
      email,
      otp,
      expiration: false,
    });
    await newOtp.save();
  }

  res.json({ status: "Successfully generated OTP and sent to your email", otp: newOtp.otp, expiration: newOtp.expiration });
}
