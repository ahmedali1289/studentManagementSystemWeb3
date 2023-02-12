import connect from "./utils/db";
import User from "./utils/userschema";
connect();
export default async function handler(req, res) {
    const { token } = req.body;
    const user = await User.findOne({ token });
    if (!user) {
        return res.status(400).json({ status: "Invalid token" });
    }
    user.token = null;
    await user.save();
    return res.json({ status: "Successfully logged out" });
}
