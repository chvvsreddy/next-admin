
import { User } from "./models"
import { connectToDB } from "./utilis";

export const fetchUsers = async (q)=>{
    const regex = new RegExp(q, "i")

    //const ITEM_PER_PAGE  = 1
    try {
        connectToDB();
        const users = await User.find({username:{$regex:regex }});
        return users
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}