// Styled Components for the ProductPage Component.
import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  font-family: "Lato", sans-serif;
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  color: #444444;
  border: 1px solid #aaa;
  border-radius: 15px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1em;
  margin: 0 0 1em 0;

  hr {
    display: block;
    height: 1px;
    border: 1px;
    border-top: 1px solid black;
    margin: 1em 0;
    padding: 0;
  }
`;

export const ProductName = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 10px;
  h3 {
    padding-left: 10px;
  }
`;

export const ProductDescription = styled.div`
  width: 50%;
  order: 1;
  min-width: 350px;
  border-radius: 3px;
  padding: 1em;
  margin: 0 0 1em 0;
  color: #212121;
  h5 {
      font-weight:bold;
  }
`;

export const ProductDetails = styled.div`
  width: 50%;
  order: 1;
  min-width: 350px;
  border-radius: 3px;
  padding: 1em;
  margin: 0 0 1em 0;
  color: #212121;
  h5 {
      font-weight:bold;
  }
`;

export const ProductOptions = styled.div`
  text-align: center;
  padding: 10px;
  width: 50%;
  order: 2;
  min-width: 350px;
  color: #212121;

  h5 {
      font-weight:bold;
    padding: 5px 0px 0px 0px;
  }
`;
