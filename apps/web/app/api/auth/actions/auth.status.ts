'use server'

// retreive the sessionId from the session cookie
// return null for user and session if no session cookie
// if a session cookie exists, validate it with lucia
// if the session is fresh, create a new sesion cookie
// if no session exists, cookie with a black value is created which expires immediately and deletes the existing session cookie

import { lucia } from "@repo/db/lib/lucia";
import { Session, User } from "lucia";
import { cookies } from "next/headers";
import { cache } from "react";

const validateSession = cache(
    async () : Promise<{user: User, session: Session} | {user: null, session: null}> => {
        console.log('cookie name: ', cookies().get(lucia.sessionCookieName)?.value);
        // const session = await lucia.getUserSessions()
        const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
        console.log("Session Id: ", sessionId);
        if(!sessionId){
            return {
                user: null,
                session: null
            }
        }; 

        const result = await lucia.validateSession(sessionId);
        console.log({ result });

        try {
            if(result.session && result.session.fresh){
                const sessionCookie = lucia.createSessionCookie(result.session.id);
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes
                );
            };

            if(!result.session){
                const sessionCookie = lucia.createBlankSessionCookie();
                cookies().set(
                    sessionCookie.name,
                    sessionCookie.value,
                    sessionCookie.attributes
                );
            };
        } catch (error) {
            console.error("Session Validation Error: ", error);
            return {
                user: null,
                session: null
            }
        };
        return result;
    }
);

export default validateSession;