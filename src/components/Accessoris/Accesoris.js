import React from "react";
import { Col } from "react-bootstrap";

export const Accesoris = () => {
  return (
    <div>
      <h1 className="TituloLentillas">Accesoris</h1>
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://drive.google.com/uc?id=1tXT-Li8CoIIfb4IjHmpX--PGjyQh1zxC"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText">BANYS OCULARS</h1>
            <p className="homeText">Liquids</p>
          </div>
        </div>

        <div className="row mb-3">
          <Col
            xs={{ order: "last" }}
            md={{ order: "first" }}
            sm={6}
            className=" text-center"
          >
            <h1 className="homeTitleText">Fundes Lents de contacte</h1>
            <p className="homeText">Fundes</p>
          </Col>
          <Col
            xs={{ order: "first" }}
            md={{ order: "last" }}
            sm={6}
            className=" divImagenPromo"
          >
            <img
              src="https://ae01.alicdn.com/kf/HTB15i4wXhD1gK0jSZFyq6AiOVXaY/Fundas-para-lentes-de-contacto-de-15-Uds-Caja-compacta-para-lentes-de-contacto-de-tama.jpg"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </Col>
        </div>

        <div className="row">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://drive.google.com/uc?id=135Qf8S7_4oxa-M3HMMGAPnb4NYMOykD1"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText">Fundes ulleres</h1>
            <p className="homeText">fundes</p>
          </div>
        </div>

        <div className="row mb-3">
          <Col
            xs={{ order: "last" }}
            md={{ order: "first" }}
            sm={6}
            className=" text-center"
          >
            <h1 className="homeTitleText">Liquid neteja ulleres</h1>
            <p className="homeText">Liquids</p>
          </Col>
          <Col
            xs={{ order: "first" }}
            md={{ order: "last" }}
            sm={6}
            className=" divImagenPromo"
          >
            <img
              src="https://cdn2.salud180.com/sites/default/files/como_se_hace_el_liquido_para_limpiar_lentes_1.jpg"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </Col>
        </div>

        <div className="row">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://drive.google.com/uc?id=1BYSgDhC6nM7z0xd0O2q0VbNpsxMeLQYp"  
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText">Cordes ulleres</h1>
            <p className="homeText">cordes</p>
          </div>
        </div>
      </div>
    </div>
  );
};
