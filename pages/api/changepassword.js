import connect from "./utils/db";
import User from "./utils/userschema";
import Otp from './utils/otpschema';
import crypto from "crypto";

connect();

export default async function handler(req, res) {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    const password = crypto.randomBytes(10).toString("hex");
    if (!user) {
        return res.status(400).json({ status: "Not able to find the user", email });
    } else {
        const storedOtp = await Otp.findOne({ email });
        if (!storedOtp) {
            return res.status(400).json({ status: "Not able to find the OTP for the user", email });
        } else if (storedOtp.otp !== otp) {
            return res.status(400).json({ status: "The provided OTP does not match the stored OTP", email });
        } else if (storedOtp.expiration) {
            return res.status(400).json({ status: "The OTP has already been used or has expired", email });
        } else {
            user.password = password;
            await user.save();
            storedOtp.expiration = true;
            await storedOtp.save();
            return res.json({ status: "Password successfully updated", expi:storedOtp.expiration });
        }
    }
}
