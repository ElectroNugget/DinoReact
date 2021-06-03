import { createContext, useContext } from "react";

export type User = {
  loggedIn: boolean;
  firstName: string;
  cartCount: number;
  UID: number;
  setLoggedIn: (boolean: boolean) => void;
  setFirstName: (name: string) => void;
  setCartCount: (number: number) => void;
  setUID: (number:number) => void;
};

export const UserContext = createContext<User>({
  loggedIn: false,
  setLoggedIn: (boolean) => console.warn("Incorrect value, expects a boolean."),
  firstName: "",
  setFirstName: (string) => console.warn("Incorrect value, expects a string."),
  cartCount: 0,
  setCartCount: (number) => console.warn("Incorrect value, expects a number."),
  UID: 0,
  setUID: (number) => console.warn("Help")
});
export const useUserContext = () => useContext(UserContext);
