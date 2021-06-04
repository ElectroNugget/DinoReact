/**
 * USERCONTEXT:
 * Gives us access to 'global' variables that I can use throughout the app.
 * TODO: Maybe could be tidied up or broken into >1 contexts? 
 */
import React, { createContext, useState } from "react";

type ProductType = {
  productId?: number;
  quantity?: number;
  productName?: string;
  price?: number;
};

//Same pattern as API
type UserType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  customerId?: number;
};

type GlobalType = {
  loggedIn: boolean;
  setLoggedIn: (boolean: boolean) => void;
  firstName: string;
  setFirstName: (name: string) => void;
  cartCount: number;
  setCartCount: (number: number) => void;
  UID: number;
  setUID: (number: number) => void;
  cart: ProductType[];
  setCart: (cart: ProductType[]) => void;
  user: UserType;
  setUser: (user: UserType) => void;
};

//This is Bjorns method
const UserContext = createContext<GlobalType>({
  loggedIn: false,
  setLoggedIn: (boolean) => console.warn("Incorrect value, expects a boolean."),
  firstName: "",
  setFirstName: (string) => console.warn("Incorrect value, expects a string."),
  cartCount: 0,
  setCartCount: (number) => console.warn("Incorrect value, expects a number."),
  UID: 0,
  setUID: (number) => console.warn("Incorrect value, expects a number."),
  cart: [],
  setCart: (cart) => console.warn("Incorrect value, expects a number."),
  user: {},
  setUser: (user) => console.warn("Incorrect value, expects a UserType."),
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
  const [cart, setCart] = useState([{}]);
  const [user, setUser] = useState({});

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
        cart,
        setCart,
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
export type { ProductType, UserType };
