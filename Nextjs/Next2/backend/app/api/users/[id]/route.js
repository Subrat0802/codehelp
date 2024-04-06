import {NextResponse} from "next/server"
import {users} from "@/lib/db"

export async function GET(request, para){
    console.log(para.params.id)
    const singleData = users.filter((el) => el.id == para.params.id)

    if(singleData.length === 0){
        return NextResponse.json({"message":"No data Found"})
    }
    return NextResponse.json(singleData)
}