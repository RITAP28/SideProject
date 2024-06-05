"use client";

import { useState } from "react";
import login from "../../actions/signin";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    const formdata = new FormData();
    formdata.append("email", formData.email);
    formdata.append("password", formData.password);
    login(formdata);
  };

  return (
    <>
      <div className="">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Email:</label>
              <input
                type="email"
                className=""
                placeholder="Enter your email"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label htmlFor="">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }}
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
