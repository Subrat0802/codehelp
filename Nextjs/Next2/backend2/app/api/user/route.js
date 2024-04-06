import {users} from "@/lib/db";
import {NextResponse} from "next/server";

//read
export const GET = async (req, res) => {
    try{
        return NextResponse.json(users); 
    }catch(error){
        return NextResponse.json({message:'Error', error}, {status:500})
    }
}


//create
export const POST = async (req, res) => {
    const {name} = await req.json();
    try{
        const newData = {name};
        newData.id = users.length+1;
        users.push(newData)
        return NextResponse.json({users})
    }catch(error){
        console.log("Error", err);
        return NextResponse.json({messgae:"Error while updating data"})
    }
    
}