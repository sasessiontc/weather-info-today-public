import Container from 'react-bootstrap/Container';
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
      </Container>
    </div>
  );
}

export default App;
