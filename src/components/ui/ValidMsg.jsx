import { styled } from "styled-components";
const P = styled.p`
  color: #db0101;
  text-align: center;
`;
function ValidMsg({ text }) {
  return <P>{text}</P>;
}

export default ValidMsg;
