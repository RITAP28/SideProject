'use server'

// invalidate the session cookie
// create a blank cookie which immediately closes the session

import { lucia } from "@repo/db/lib/lucia"
import { ActionResult } from "next/dist/server/app-render/types"
import validateSession from "./auth.status"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const signout = async (): Promise<ActionResult> => {
    const { session } = await validateSession();
    if(!session){
        return {
            msg: "UnAuthorized",
        }
    };
    console.log("Logged out");
    await lucia.invalidateSession(session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
    );

    return redirect("/api/auth/components/signin");

};

export default signout;