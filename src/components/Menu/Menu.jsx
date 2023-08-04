import { styled, keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #3333334b;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: ${({ menuopen }) => (menuopen ? slideIn : null)};
`;

const StyledLink = styled(NavLink)`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
`;

function Menu({ setMenu, menuOpen }) {
  return (
    <StyledMenu menuopen={menuOpen.toString()}>
      <StyledLink onClick={() => setMenu(false)} to="/">
        Home
      </StyledLink>
      <StyledLink onClick={() => setMenu(false)} to="/register">
        Register
      </StyledLink>
    </StyledMenu>
  );
}

export default Menu;
