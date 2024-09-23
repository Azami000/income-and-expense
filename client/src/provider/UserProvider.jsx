"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandlerFunction = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/user/login", {
        email: email,
        password: password,
      });

      window.localStorage.setItem("token", res.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      setIsLoggedIn(false);
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      router.push("/user/currency");
    } else {
      setIsLoggedIn(false);
      router.push("/user/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, loginHandlerFunction }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
