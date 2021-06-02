import React, { useState } from "react";
//This snyntax SUCKS!!!!!!
const Context = React.createContext<Partial<ContextType>>({});

type Props = {
  children: React.ReactNode;
};

type ContextType = {
    user: {
      customerId: number,
      firstName: string,
      lastName: string,
      email: string 
    }
}

const ContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const [cartContents, setCartContents]  = useState([]);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
