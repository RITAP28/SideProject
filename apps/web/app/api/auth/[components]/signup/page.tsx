import { FormEvent } from "react";
import signup from "../../actions/signup";

export default function Signup() {
  return (
    <>
      <div>
        <div className="">
          <h1 className="">Create an account</h1>
        </div>
        <div className="">
          <form action={signup}>
            <div className="flex flex-row">
              <div className="">
                <label htmlFor="username" id="username">
                  username:
                </label>
              </div>
              <div className="">
                <input
                  id="username"
                  type="text"
                  className=""
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="">
                <label htmlFor="email" id="email">
                  Email:
                </label>
              </div>
              <div className="">
                <input
                  id="email"
                  type="email"
                  className=""
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="">
                <label htmlFor="password" id="password">
                  password:
                </label>
              </div>
              <div className="">
                <input
                  id="password"
                  type="password"
                  className=""
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// async function registerUser(_: any, formData: FormData): Promise<ActionResult> {
//   "use server";
//   const username = formData.get("username");
//   if(typeof username !== "string" || username.length < 3 || username.length > 31) {
//     return {
//       error: "Invalid Username"
//     }
//   };
//   const password = formData.get("password");
//   if(typeof password !== "string" || password.length < 5 || password.length > 30) {
//     return {
//       error: "Invalid Password"
//     }
//   };
// }

// interface ActionResult {
//   error: string;
// }
