import connect from "./utils/db";
import User from "./utils/userschema";
import crypto from "crypto";
import validator from "validator";

connect();

export default async function handler(req, res) {
  try {
    const email = req.body.email;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ status: "Invalid email address." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ status: "User with this email already exists." });
    }

    const password = crypto.randomBytes(10).toString("hex");
    const userData = {
      ...req.body,
      password,
    };

    const user = await User.create(userData);
    res.status(200).json({ email, password });
  } catch (error) {
    res.status(400).json({ status: "Not able to create a new user.", error });
  }
}
