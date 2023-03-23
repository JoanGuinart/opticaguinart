/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { RiAdminFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import LogoOptica from "../../img/Logo_Optica.svg"
const NavBar = () => {

  const [clicks, setClicks] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setClicks(clicks + 1);
    if (clicks + 1 === 9) {
      setIsVisible(true);
    }
  };


  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/ulleres",
      name: "Ulleres",
    },
    {
      path: "/lents",
      name: "Lents de contacte",
    },
    {
      path: "/audiometria",
      name: "Audiometria",
    },
    {
      path: "/serveis",
      name: "Serveis",
    },
    {
      path: "/accesoris",
      name: "Accesoris",
    },
  ];
  const RegisterData = [
    {
      name: "Entrar",
    },
    {
      path: "/micuenta",
      name: "Compte",
    },
  ];


  return (
   <div className="navbar-position">
      <Navbar className="navbar navbar-position-2" expand="lg">
        <Container className="navbarSize">
            <img className="brand" src={LogoOptica} alt="LogoOptica"/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="containerNavButons">
            <Nav className="ms-auto">
              {menuData.map((item) => (
                <NavLink className="linkNav" to={item.path} key={item.name}>
                  <div className="list_item">{item.name}</div>
                </NavLink>
              ))}
            </Nav>
            <Nav className="ms-auto">
            <a type="button" style={{color: "whitesmoke", cursor: "default"}} onClick={handleClick}>++++++++
               {isVisible && (               
              <NavLink
                onChange={handleClick}
                to={RegisterData[1].path}
                key={RegisterData[1].name}
                className="botonUno"
              >
                {<RiAdminFill/>}
              </NavLink>
               )}
               </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div> 
  );
};

export default NavBar;
