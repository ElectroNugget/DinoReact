import { useContext } from "react";
import "../css/stylesheet.css";
import { UserContext } from "../UserContext";
//TODO: How to handle customerID?
type HeadlineProps = {
  message: string;
};

function Headline({ message }: HeadlineProps): JSX.Element {
  //TODO: Need to do something here... Get UID and fName from API when registering.
  let customerId: number = 1;

  //Standard way of doing it.
  //I AM SUBSCRIBING TO USERCONTEXT SO I CAN USE THESE FIELDS IN THIS COMPONENT
  const { firstName, setFirstName } = useContext(UserContext);

  async function getUserName() {
    await fetch(`http://localhost:8000/customers/${customerId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setFirstName(data.firstName);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getUserName();

  return (
    <div>
      <UserContext.Consumer>
        {({ loggedIn }) => {
          if (loggedIn) {
            return (
              <h3>
                Hello, {firstName}
                {message}
              </h3>
            );
          }
          return <h3>Hello, Guest{message}</h3>;
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default Headline;
