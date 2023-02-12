import connect from "./utils/db";
import User from "./utils/userschema";
import { uuid } from 'uuidv4';
import validator from 'validator';
connect();
export default async function handler(req, res) {
    const { email, password } = req.body;
    if (!validator.isEmail(email)) {
        return res.status(400).json({ status: "Invalid email address." });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ status: "Not able to find the user" });
    }
    if (user.password !== password) {
        return res.status(400).json({ status: "Incorrect password." });
    }

    const token = uuid();
    user.token = token;
    await user.save();
    res.json({ status: "Successfully login", token: token });
}
