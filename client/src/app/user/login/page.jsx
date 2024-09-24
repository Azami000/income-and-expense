"use client";
import { useState } from "react";
import { Question } from "@/components/Question";

import Link from "next/link";
import { Input1 } from "@/components/Input";
import { Name } from "@/components/Name";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { useUser } from "@/provider/UserProvider";

const LoginPage = () => {
  const { loginHandlerFunction } = useUser();

  const [error, setError] = useState("");
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };

  const login = async () => {
    setError("");
    try {
      await loginHandlerFunction(loginInput.email, loginInput.password);
      router.push("/step");
    } catch (error) {
      setError("ali ng ni buruu bn");
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
          {error && <div className="text-red-500">{error}</div>}{" "}
          <div className="flex w-[370px] text-white">
            <Button onClick={login} text={"Log in"} />
          </div>
        </div>
        <div className="flex gap-4 ">
          <Question text="Don't have account?" className="text-black" />
          <Link className="flex text-blue-400" href="/user/sign-up">
            Sign up
          </Link>
        </div>
      </div>
      <div className="bg-blue-500 flex h-screen w-[50%]"></div>
    </div>
  );
};

export default LoginPage;
