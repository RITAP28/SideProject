"use server";

import prisma from "@repo/db/lib/index";
import ErrorHandler from "../../../../../server/src/utils/error.handler";
import bcrypt from "bcrypt";
import { lucia } from "@repo/db/lib/lucia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const login = async (formData: FormData) => {
  const rawFormData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const existingUser = await prisma.user.findUnique({
    where: {
      email: rawFormData.email,
    },
  });

  try {
    if (!existingUser) {
      return new ErrorHandler("User Not Found", 404);
    }

    const validPassword = await bcrypt.compare(
      rawFormData.password,
      existingUser.password
    );
    if (!validPassword)
      return new ErrorHandler("Incorrect Email or Password", 401);

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );
    return redirect("/");
  } catch (error) {
    console.error(error);
  }
  console.log("Successfully created");
};

export default login;
