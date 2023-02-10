import connect from "./utils/db";
import User from "./utils/schema";
import { uuid } from 'uuidv4';
connect();
export default async function handler(req, res) {
const {email, password} = req.body;
const user = await User.findOne({email,password})
if(!user){
return res.status(400).json({staus:"Not able to find the user"})
}
else{
const token = uuid();
user.token = token;
await user.save();
res.json({status:"Successfully login",token:token})
}
}