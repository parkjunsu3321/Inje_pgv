import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Appbar } from "./component/Appbar";
import { RootRoutes } from "./routes/RootRoute";
import styled from "styled-components";
const Container = styled.div``;
function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Container>
          <RootRoutes />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
