import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="navigation">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
