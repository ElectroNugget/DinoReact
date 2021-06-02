import { createContext, useContext } from "react";

export type User = {
  loggedIn: boolean;
  firstName: string;
  setLoggedIn: (boolean: boolean) => void;
  setFirstName: (name: string) => void;
};

export const UserContext = createContext<User>({
  loggedIn: false,
  setLoggedIn: (boolean) => console.warn("Incorrect value, expects a boolean"),
  firstName: "",
  setFirstName: (string) => console.warn("Incorrect value, expects a string"),
});
export const useUserContext = () => useContext(UserContext);
