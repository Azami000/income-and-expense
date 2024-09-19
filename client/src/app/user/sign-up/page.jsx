import { Name } from "@/components/Name";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export const signPage = () => {
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
  const register = async () => {
    console.log(userInput);

    const handleSubmit = async (event) => {
      event.preventDefualt();

      const { data } = axios.get("http://localhost:8000/user/sign-up");
      console.log(data);
    };
  };
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-[50%] h-screen items-center">
        <Name />
        <div className="flex flex-col gap-5">
          <h1>Create Geld account</h1>
          <div>Sign up below to create your Wallet account</div>
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
          <Input
            name="Re-password"
            type="password"
            placeholder="Password"
            inputHandler={handleChange}
          />
          <Button text="Sign up" clickhandler={register} />
        </div>
        <Question text="Already have account?" href="login" />
      </div>
    </div>
  );
};
export default signPage;
