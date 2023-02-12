import connect from "./utils/db";
import User from "./utils/userschema";

connect();

export default async function handler(req, res) {
  const { oldPassword, newPassword, confirmPassword } = req.body;
  const user = await User.findOne({ password: oldPassword });
  if (!user) {
    return res.status(400).json({ status: "Not able to find the user with the provided old password" });
  } else {
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ status: "The new password and confirmed password do not match" });
    } else {
      user.password = newPassword;
      await user.save();
      return res.json({ status: "Password successfully updated" });
    }
  }
}
