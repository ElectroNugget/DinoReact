import React, { useState } from "react";
//This snyntax SUCKS!!!!!!
const Context = React.createContext<ContextType>({user:""});

type Props = {
  children: React.ReactNode;
};

type ContextType = {
    user: string
}

const ContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState("");
  return <Context.Provider value={{user}}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
