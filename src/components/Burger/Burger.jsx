import { styled } from "styled-components";
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
`;

const BuergerLine = styled.div`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background: #000;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;
`;
function Burger({ setMenu, menuOpen }) {
  return (
    <StyledBurger onClick={() => setMenu(!menuOpen)}>
      <BuergerLine />
      <BuergerLine />
      <BuergerLine />
    </StyledBurger>
  );
}

export default Burger;
