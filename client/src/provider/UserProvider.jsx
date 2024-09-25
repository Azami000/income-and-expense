"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const router = useRouter();

  const loginHandlerFunction = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:8000/user/login", {
        email: email,
        password: password,
      });

      window.localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setIsLoggedIn(true);
    } catch (error) {
      setToken("");
      setIsLoggedIn(false);
      throw new Error(error.message);
    }
  };
// refresh hiihed baij bhad useeffect bichiv
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setToken(token);
      setIsLoggedIn(true);
    } else {
      setToken("");
      setIsLoggedIn(false);
      // router.push("/user/login");
    }
  }, []);

  return (
    <UserContext.Provider value={{ isLoggedIn, loginHandlerFunction, token }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
