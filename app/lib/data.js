
import { User,Product } from "./models"
import { connectToDB } from "./utilis";

export const fetchUsers = async (q,page)=>{
    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE  = 1
    try {
        connectToDB();
        const count = (await User.find({username:{$regex:regex}})).length;
        const users = await User.find({username:{$regex:regex}})
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page-1));
       
        //console.log(count)
        return {count, users}       
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const fetchProducts = async (q,page)=>{
    const regex = new RegExp(q, "i")

    const ITEM_PER_PAGE  = 1
    try {
        connectToDB();
        const count = (await Product.find({title:{$regex:regex}})).length;
        const products = await Product.find({title:{$regex:regex}})
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page-1));
       
        //console.log(count)
        return {products,count}       
        
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}