"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import AccessToken from "./accessToken."

export default function Login() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <AccessToken />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}