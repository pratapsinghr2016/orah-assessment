import React from "react"
import { NavLink } from "react-router-dom"
import { Colors } from "shared/styles/colors"
import styled from "styled-components"

export const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderItems>
        <NavItem to="/">Doc</NavItem>
        <NavItem to="/staff/daily-care">Daily Care</NavItem>
        <NavItem to="/staff/activity">Activity</NavItem>
      </S.HeaderItems>
    </S.Header>
  )
}

const NavItem: React.FC<{ to: string }> = (props) => {
  const activeStyle = ({ isActive }: { isActive: boolean }) => ({
    textDecoration: "none",
    fontWeight: 700,
    fontSize: isActive ? 16 : 14,
    color: isActive ? "#072744" : "#fff",
    padding: "18px 20px 17px",
    backgroundColor: isActive ? "#fff" : Colors.blue.base,
    borderRadius: "5px",
  })
  return (
    <NavLink to={props.to} style={activeStyle}>
      {props.children}
    </NavLink>
  )
}

const S = {
  Header: styled.header`
    display: flex;
    align-items: center;
    height: 58px;
    margin-bottom: 4rem;
    background-color: ${Colors.blue.base};
    color: #fff;
    border: 4px solid ${Colors.blue.base};
  `,
  HeaderItems: styled.nav`
    display: flex;
    height: 100%;
  `,
}
