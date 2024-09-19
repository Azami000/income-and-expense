"use client";
import { useState } from "react";
import { Name } from "@/components/name";
import { Input } from "@/components/Input";
import { Button } from "@/components/button";
import { Question } from "@/components/Question";

const LoginPage = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginInput((prev) => ({ ...prev, [name]: value }));
  };
  const login = async () => {
    console.log(loginInput);
  };
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-[50%] h-screen items-center">
        <Name />
        <div className="flex flex-col gap-5">
          <h1>Welcome Back</h1>
          <div>Welcome back, Please enter your details</div>
        </div>

        <div className="flex flex-col mt-[40px] ml-[252px] gap-[16px]">
          <Input
            name="username"
            type="text"
            placeholder="Username"
            inputHandler={handleChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            inputHandler={handleChange}
          />
          <Button text="Log in" clickhandler={login} />
        </div>
        <Question text="Don't have account?" href="sign-up" />
      </div>
    </div>
  );
};

export default LoginPage;
