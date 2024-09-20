"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter here

import { Question } from "@/components/Question";
import Button from "@/components/Button";
import Link from "next/link";
import { Input1 } from "@/components/Input";
import { Name } from "@/components/Name";
import axios from "axios";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const router = useRouter(); // Move this line here

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const login = async () => {
    setError("");
    try {
      const res = await axios.post("http://localhost:8000/user/login", {
        email: loginInput.email,
        password: loginInput.password,
      });
      router.push("/confirm"); // Redirect after successful login
    } catch (error) {
      if (error.response) {
        setError(error.response.data || "An error occurred");
      } else {
        setError("Network error, please try again later.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col gap-8 justify-center w-[50%] h-screen items-center">
        <Name />
        <div className="flex items-center flex-col gap-2">
          <h1>Welcome Back</h1>
          <div>Welcome back, Please enter your details</div>
        </div>

        <div className="flex flex-col justify-center mt-[40px] gap-[24px]">
          <Input1
            name="email"
            type="text"
            placeholder="Email"
            inputHandler={handleChange}
          />
          <Input1
            name="password"
            type="password"
            placeholder="Password"
            inputHandler={handleChange}
          />
          {error && <div className="text-red-500">{error}</div>}
          <Button onClick={login} />
        </div>
        <div className="flex gap-4 ">
          <Question text="Don't have an account?" className="text-black" />
          <Link href="/user/sign-up">Sign up</Link>
        </div>
      </div>
      <div className="bg-blue-500 flex h-screen w-[50%]"></div>
    </div>
  );
};

export default LoginPage;
