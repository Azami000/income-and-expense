"use client";
import { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const user = "Knife";
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
export const useUser = () => {
  const user = useUser(createContext);
  return user;
};
