navbar 1:

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">OPTICA GUINART</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  MENÚ
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;

------------------------


navbar 2:

import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function NavBar() {
  return (
    <Navbar collapseOnSelect fixed = 'top' expand = 'sm' bg = 'dark' variant='dark'>
        <Container>
            <Navbar.Brand href="/" className=''>OPTICA GUINART</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className=''>
                <Nav.Link href='#gafas'>GAFAS</Nav.Link>
                <Nav.Link href='#audifonos'>AUDIFONOS</Nav.Link>
                <Nav.Link href='#servicios'>SERVICIOS</Nav.Link>
                <Nav.Link href='#accesorios'>ACCESORIOS</Nav.Link>
            </Nav>
            <Navbar.Text direction="horizontal" gap={3}>
            <a href="#login">LOGIN</a>
          </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar 

--------------------------------

Login:

import React from 'react'
const Login = () => {

  

    return (
      <form className='anchoSignUp'>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
         <p className="forgot-password text-right">
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
          Forgot <a href='#'>password?</a> 
        </p> 
      </form>
    )
  }

  export default Login 



Register:

import React from 'react'
import { NavLink } from 'react-router-dom'
import Login from "./Login"
const SignUp = () => {

  const LoginData = [
    {
      path: '/login',
      name: 'Login'
    }
  ]

    return (
      <form className='anchoSignUp'>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered?<NavLink to={LoginData[0].path} key={LoginData[0].name}>{LoginData[0].name}</NavLink>
        </p>
      </form>
    )
  }

  export default SignUp


