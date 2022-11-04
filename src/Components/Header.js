import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/" style={{ fontWeight: 'bolder', fontSize: 'xx-large', marginLeft: '50%', marginBottom: '10px' }}>SpaceX</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
