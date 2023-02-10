import mongoose from "mongoose";
const connnection={};
async function connect(){
    if(connnection.isConnected){
        return
    }
    const db = await mongoose.connect("mongodb+srv://ahmed:2463@cluster0.cbgf0hm.mongodb.net/?retryWrites=true&w=majority")
    connnection.isConnected = db.connections[0].readyState;
}
export default connect;