// export async function GET(){
//     return new Response('Hello world');
// }
import {NextResponse} from "next/server"

export async function GET(){
    return NextResponse.json({"message":"Hello world", age:20}, {status:201})
}

