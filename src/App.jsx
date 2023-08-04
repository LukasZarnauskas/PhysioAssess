import Header from "./components/layout/Header";
import "./styles/reset.css";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f4f4f4;
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
