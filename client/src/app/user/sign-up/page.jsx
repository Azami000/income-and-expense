"use client";
import { Name } from "@/components/Name";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Question } from "@/components/Question";
import { Button } from "@/components/Button";
import { Input1 } from "@/components/Input";
import Link from "next/link";
import axios from "axios";

const SignPage = () => {
  const router = useRouter();

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
    username: "",
    rePassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const register = async (event) => {
    event.preventDefault();
    console.log("User input:", userInput);

    await axios.post("http://localhost:8000/user/sign-up", userInput);

    try {
      router.push("/user/login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col gap-8 justify-center w-[50%] h-screen items-center">
        <div className="flex flex-col w-[50%] h-screen justify-center items-center">
          <Name />
          <div className="flex items-center flex-col gap-2">
            <h1>Create Geld account</h1>
            <div>Sign up below to create your Wallet account</div>
          </div>
          <form
            className="flex flex-col mt-[40px] justify-center  gap-[16px]"
            onSubmit={register}
          >
            <Input1
              name="email"
              type="text"
              placeholder="Email"
              inputHandler={handleChange}
            />
            <Input1
              name="username"
              type="text"
              placeholder="Username"
              inputHandler={handleChange}
            />
            <Input1
              name="password"
              type="password"
              placeholder="Password"
              inputHandler={handleChange}
            />
            <Input1
              name="rePassword"
              type="password"
              placeholder="Re-enter Password"
              inputHandler={handleChange}
            />
            <div className="flex w-[370px] text-white">
              <Button text={"Sign up"} clickhandler={register} />
            </div>
          </form>
          <div className="flex gap-4 ">
            <Question text="Don't have account?" className="text-black" />
            <Link className="flex text-blue-500" href="/user/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 flex h-screen w-[50%]"></div>
    </div>
  );
};

export default SignPage;
