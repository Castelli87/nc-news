import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "./contexts/userContext";

function NavigationBar() {
  const user = useContext(UserContext)
  console.log(user.username)

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Icon</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/articles">Articles</Nav.Link>
          <Nav.Link href="#">Topics </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>{user.username}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
