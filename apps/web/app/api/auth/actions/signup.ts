'use server'

import { generateId } from "lucia";
import prisma from "@repo/db/lib/index";
import {lucia} from "@repo/db/lib/lucia";
import { Redirect } from "next";
import bcrypt from "bcrypt";

const signup = async (formData: FormData) => {
    const rawFormData = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string
    };
    // const hashedPassword = bcrypt.hash(rawFormData.password, 10);
    console.log(rawFormData);
};

export default signup;