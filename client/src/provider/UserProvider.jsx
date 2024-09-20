"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const loginHandlerFunction = async (email, password) => {
    try {
      const token = "gg";
      window.localStorage.SetItem("token", token);
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
      router.push("/");
    } else {
      setIsLoggedIn(false);
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
