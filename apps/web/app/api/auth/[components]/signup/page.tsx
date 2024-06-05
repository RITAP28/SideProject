'use client'

import { useState } from "react";
import signup from "../../actions/signup";
// import { useRouter } from "next/navigation";

export default function Signup() {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    // e.preventDefault();
    const formdata = new FormData();
    formdata.append("username", formData.username);
    formdata.append("email", formData.email);
    formdata.append("password", formData.password);
    signup(formdata);
  };

  return (
    <>
      <div>
        <div className="">
          <h1 className="">Create an account</h1>
        </div>
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row">
              <div className="">
                <label htmlFor="username" id="username">
                  username:
                </label>
              </div>
              <div className="">
                <input
                  value={formData.username}
                  onChange={(e) => {
                    setFormData({...formData, username: e.target.value});
                  }}
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
                  type="email"
                  className=""
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      email: e.target.value
                    })
                  }}
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
                  type="password"
                  className=""
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      password: e.target.value
                    })
                  }}
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
