import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-black p-12 text-lg">
      <Container>
        <Navbar.Brand className="text-white hover:text-slate-300 no-underline" href="/">Home</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
