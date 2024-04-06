'use client'
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

function AuthButton(){
    const {data: session} = useSession();

    if(session){
        return(
            <>
                {session?.user?.name}
                <buttun onClick={() => signOut()}>Sign out</buttun>
            </>
        )
    }
    return(
        <>
            Not sign in 
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}

export default function NavBar(){
    return(
        <div>
            <AuthButton />
        </div>
    )
}