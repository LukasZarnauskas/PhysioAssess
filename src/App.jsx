import Header from "./components/layout/Header";
import "./styles/reset.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: #333;
  color: whitesmoke;
`;
function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
