import React from "react";
import { Colors } from "shared/styles/colors";
import styled from "styled-components";

const S = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #333;
    > h1 {
      font-size: 4rem;
    }
    > a {
      text-decoration: none;
      font-size: 1.7rem;
      background-color: #fff;
      border-radius: 5px;
      color: ${Colors.blue.base};
      padding: 2.5px 10px;
      border: 2px solid ${Colors.blue.base};
    }
  `,
};

const PageNotFound = () => {
  return (
    <S.Container>
      <h1>Page Not Found</h1>
      <a href="/">Home Page</a>
    </S.Container>
  );
};

export default PageNotFound;
