'use server'

import { generateId } from "lucia";
import prisma from "@repo/db/lib/index";
import {lucia} from "@repo/db/lib/lucia";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const signup = async (formData: FormData) => {
    const rawFormData = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string
    };
    const hashedPassword = await bcrypt.hash(rawFormData.password, 10);
    const userId = generateId(15);
    try {
        await prisma.user.create({
            data: {
                id: userId,
                name: rawFormData.username,
                email: rawFormData.email,
                password: hashedPassword
            }
        });
        const session = await lucia.createSession(userId, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
        return redirect('/');
    } catch (error) {
        console.error(error);
    };
};

export default signup;