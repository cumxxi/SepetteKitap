import { Nav, Container, Navbar } from "react-bootstrap";
import React from "react";

export default function Navigation() {
  return (
    //<Link to="/">Home</Link>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href="#Featuring">Featuring</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
