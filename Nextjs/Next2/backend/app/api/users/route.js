import { NextResponse } from "next/server"
import {users} from "@/lib/db";

export async function GET(){
    return NextResponse.json(users)
}