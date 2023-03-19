import { Avatar } from "@material-ui/core";
import { Images } from "assets/images";
import React from "react";
import { Colors } from "shared/styles/colors";
import styled from "styled-components";

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.FooterItem>
        <S.FooterItemContent>
          <h1>Project</h1>
          <a href="/">Docs</a>
          <a
            target="_blank"
            href="https://github.com/BoardingwareLtd/orah-engineering-test/tree/main/front-end"
          >
            Github
          </a>
          <a target="_blank" href="https://www.orah.com/">
            Organization
          </a>
        </S.FooterItemContent>
        <S.FooterItemContent style={{ justifyContent: "center" }}>
          <Avatar
            style={{
              width: 100,
              height: 100,
              border: "3.3px solid",
              padding: 3,
            }}
            src={Images.logo}
          />
        </S.FooterItemContent>
        <S.FooterItemContent>
          <h1>Author</h1>
          <a target="_blank" href="https://github.com/pratapsinghr2016">
            Github
          </a>
          <a target="_blank" href="https://hashnode.com/@iJustCode">
            Blog
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rajat-pratap-singh-sse/"
          >
            Linkedin
          </a>
          <a href="mailto:pratapsinghr2016@gmail.com">Email</a>
          <a href="tel:+919877411556">Phone</a>
        </S.FooterItemContent>
      </S.FooterItem>
    </S.Footer>
  );
};

const S = {
  Footer: styled.footer`
    position: relative;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 100%;
    margin-top: 4.5rem;
    background-color: ${Colors.blue.base};
  `,
  FooterItem: styled.section`
    color: #ffffff;
    display: flex;
    border: 2px solid;
    justify-content: space-evenly;
    width: 100%;
  `,
  FooterItemContent: styled.div`
    display: flex;
    flex-direction: column;
    > h1 {
      line-height: 0;
    }
    > a {
      text-decoration: none;
      font-weight: 700;
      padding: 8px;
      font-size: 15px;
      line-height: 0.8;
      color: #072744;
    }
  `,
};
