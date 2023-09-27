import React from "react";
import "./header.css"
import Container from 'react-bootstrap/Container';
import  { useNavigate } from 'react-router-dom';
import { Navbar , Nav , NavDropdown } from 'react-bootstrap';
// import SignUp from "../signUp/signUp";
// import App from "../App";
function Header() {
  const userInfo=JSON.parse(localStorage.getItem("User"))
  console.log(userInfo,"userInfo")
  const history=useNavigate();
  function logOut() {
    localStorage.clear();
    history("/")
  }
  return (
    <>
      <div className="header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Welcome to ToDo-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                {/* <Nav.Link href="#home">SignUp</Nav.Link> */}
                <NavDropdown title={userInfo.name}>
                  <NavDropdown.Item onClick={logOut}>LogOut</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}
export default Header;