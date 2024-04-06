
import {NextResponse} from "next/server";
import {users} from "@/lib/db"

export const GET = async(req) => {
    try{
        const id = req.url.split('user/')[1];
        console.log(id);
        console.log(users)

        const singleData = users.filter((user) => user.id.toString() === id)
        console.log(singleData);

        if(singleData === 0){
            return NextResponse.json({message:"Data not found"})
        }
        else{
            return NextResponse.json({singleData});
        }

        return NextResponse.json('done')
    }catch(error){
        console.log("error", error)
    }
}


//delete

export const DELETE = async (req) => {
    try{
        const id = req.url.split('user/')[1];
        console.log(id);
        console.log(users)

        const userIndex = users.findIndex((user) => user.id.toString() === id)
        console.log(userIndex);

        if(userIndex === -1){
            return NextResponse.json({message:"user Data not found"})
        }

        users.splice(userIndex,1)
        console.log(users);
        return NextResponse.json('Deleted')

    }catch(error){
        console.log("error", error)
    }
}



export const PUT = async (req) => {
    try{
        const id = req.url.split('user/')[1];
        console.log(id);

        const {userName} = await req.json();

        const user = users.find((user) => user.id.toString() === id);
        user.name = userName;

        return NextResponse.json({message:"user update"})

    }catch(error){
        console.log("error")
    }
}