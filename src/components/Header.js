

import React from "react"
import styled from "styled-components";

import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <HeaderDiv>
      <MainNav>
        <UL>
          <LI>
            <NavLink to="/" >Home</NavLink>
          </LI>
          <LI>
            <NavLink to="/about" >About</NavLink>
          </LI>
        </UL>
      </MainNav>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.header`
  height: 80px;
  background-color: ${p => p.theme.navCol};
  display: flex;
  align-items: center;
`

const MainNav = styled.nav`


`
const UL = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
`
const LI = styled.li`
  
`


export default Header;