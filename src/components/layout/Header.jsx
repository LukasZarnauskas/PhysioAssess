import { styled } from "styled-components";
import Nav from "../Nav";
const HeaderNav = styled.header`
  background-color: whitesmoke;
  color: #0b3d91;
`;
const Logo = styled.p`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 0.5rem;
`;
const Span1 = styled.span`
  color: #75c888;
`;

function Header() {
  return (
    <HeaderNav>
      <Logo>
        Physio<Span1>Assess</Span1>
        <Nav />
      </Logo>
    </HeaderNav>
  );
}

export default Header;
