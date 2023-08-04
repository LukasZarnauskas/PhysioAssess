import { styled } from "styled-components";

import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";
import { useState } from "react";

const HeaderNav = styled.header`
  background-color: whitesmoke;
  color: #0b3d91;
  background: #f4f4f4;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
`;
const Logo = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;
const Span1 = styled.span`
  color: #75c888;
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderNav>
      <Logo>
        Physio<Span1>Assess</Span1>
      </Logo>

      <Burger setMenu={setMenuOpen} menuOpen={menuOpen} />

      {menuOpen ? <Menu setMenu={setMenuOpen} menuOpen={menuOpen} /> : null}
    </HeaderNav>
  );
}

export default Header;
