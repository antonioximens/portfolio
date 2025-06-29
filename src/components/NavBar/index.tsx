import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import style from "./style.module.css";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container className="mt-3">
        <Navbar.Brand href="#Home" className="d-flex align-items-center">
          <span
            className={`me-2 ${style.portfolioStripe}`}
          ></span>
          Portfólio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link className={style.buttonLink} href="#Home" >
              Home
            </Nav.Link>
            <Nav.Link className={style.buttonLink} href="#AboutMe">
              Sobre
            </Nav.Link>
            <Nav.Link className={style.buttonLink} href="#projects">
              Projetos
            </Nav.Link>
            <Nav.Link className={style.buttonLink} href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className={style.buttonLink} href="#contact">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
