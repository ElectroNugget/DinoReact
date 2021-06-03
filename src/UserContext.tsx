import React, { createContext, useState } from "react";

type User = {
  loggedIn: boolean;
  firstName: string;
  cartCount: number;
  UID: number;
  setLoggedIn: (boolean: boolean) => void;
  setFirstName: (name: string) => void;
  setCartCount: (number: number) => void;
  setUID: (number: number) => void;
};

//This is Bjorns method
const UserContext = createContext<User>({
  loggedIn: false,
  setLoggedIn: (boolean) => console.warn("Incorrect value, expects a boolean."),
  firstName: "",
  setFirstName: (string) => console.warn("Incorrect value, expects a string."),
  cartCount: 0,
  setCartCount: (number) => console.warn("Incorrect value, expects a number."),
  UID: 0,
  setUID: (number) => console.warn("Help"),
});

type PropsType = {
  children?: React.ReactNode;
};

//FC means functional component
function UserContextProvider({ children }: PropsType): JSX.Element {
  const [loggedIn, setLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [UID, setUID] = useState(0);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        firstName,
        setFirstName,
        cartCount,
        setCartCount,
        UID,
        setUID,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
export type { User, PropsType };
