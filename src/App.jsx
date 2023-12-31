import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import "./styles/reset.css";
import styled from "styled-components";
import Home from "./pages/Home";
import Register from "./pages/Register";
import MainPage from "./pages/MainPage";

const Container = styled.div`
  background-color: #f4f4f4;
  color: #000;
`;
function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Container>
  );
}

export default App;
