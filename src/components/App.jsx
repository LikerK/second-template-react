import Container from "react-bootstrap/Container";
import MainPage from "./MainPage.jsx";
import Header from "./Header.jsx";

const App = () => {
  return (
    <Container>
      <Header />
      <MainPage />
    </Container>
  );
};

export default App;
