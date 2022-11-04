import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home'
import Details from './Pages/Details'
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Container>
    <Router>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" exact element={<Details />} />
        </Routes>
    </Router>
    </Container>
  );
}

export default App;
