import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const H1 = styled.h1`
  color: #333;
`;
function Home() {
  return (
    <Container>
      <H1>Prisijungti</H1>

      <form action="">
        <label htmlFor="username"></label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </Container>
  );
}

export default Home;
