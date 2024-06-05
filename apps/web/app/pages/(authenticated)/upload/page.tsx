"use client";

import axios from "axios";
import { redirect } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

interface MulterUpload {
  file: File;
}

export default function Upload() {
  const [formData, setFormData] = useState<MulterUpload | null>(null);
  const handleUpload = async () => {
    try {
      const res = await axios.post("/pages/upload", formData, {
        withCredentials: true,
      });
      console.log("response after clicking the upload button: ", res);
      console.log("Successfully uploaded");
      return redirect("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="">
        <form encType="multipart/form-data">
          <div className="my-4 ml-2">
            <input
              type="file"
              accept="video/*"
              id="videoFile"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.files !== null) {
                  const file = e.target.files[0] as File;
                  setFormData({ file });
                  console.log(file);
                }
              }}
            />
          </div>
          <div className="mt-[2rem] ml-2">
            <button
              type="button"
              className="px-6 py-2 bg-black text-white rounded-md hover:cursor-pointer"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
