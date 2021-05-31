import React from "react";
//FIXME: First time the app loads it renders "Guesty" even though it fetches andrew
//TODO: How to handle customerID?
let customerId: number = 1;
let customerName: string = "";

async function getUserName() {
  await fetch(`http://localhost:8000/customers/${customerId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      customerName = data.customerName;
    })
    .catch((error) => {
      console.log(error);
    });
}

getUserName();

type HeadlineProps = {
  message: string;
};

function Headline({ message }: HeadlineProps): JSX.Element {
  return (
    <div>
      <h3>
        Hello, {customerName? customerName : "Guest"}{message}
      </h3>
    </div>
  );
}

export default Headline;
