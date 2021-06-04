/**
 * HEADLINE:
 * Displays the username on several pages.
 */
import { useContext } from "react";
import { UserContext } from "../UserContext";
import "../css/stylesheet.css";

type HeadlineProps = {
  message: string;
};

function Headline({ message }: HeadlineProps): JSX.Element {
  const { user } = useContext(UserContext);
  return (
    <div>
      <UserContext.Consumer>
        {({ loggedIn }) => {
          if (loggedIn) {
            return (
              <h3>
                Hello, {user.firstName}
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
