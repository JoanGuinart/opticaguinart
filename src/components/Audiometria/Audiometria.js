import React from "react";
import { Col } from "react-bootstrap";

export const Audiometria = () => {
  return (
    <div>
      <h1 className="TituloLentillas">Audiometría</h1>
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://www.beltone.com/-/media/beltone/beltone-en/frontpage/hearing-devices/hearing-aid-designs-and-styles/iic-hearing-aid-style.ashx?w=1600&usecustomfunctions=1&centercrop=1&hash=11066DBCB49D6128DDB00EDEB192DC03"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText">Intracanal</h1>
            <p className="homeText2 serveisText">
              {" "}
              El model intracanal és un audiòfon que es fa servir en gairebé
              tots els tipus de discapacitat auditiva, inclosa la pèrdua
              auditiva extrema. El millor dels dispositius és que s'ubiquen dins
              del canal auditiu on l'auricular podrà augmentar l'amplificació
              dels aguts
              <br />
            </p>
          </div>
        </div>

        <div className="row mb-3">
          <Col
            xs={{ order: "last" }}
            md={{ order: "first" }}
            sm={6}
            className=" text-center"
          >
            <h1 className="homeTitleText">Retroauriculars</h1>
            <p className="homeText2 serveisText">
              Aquests audiòfons es col·loquen darrere l'oïda. El so es transmet
              a través d'un cable, tub fi o tub que recorre la part superior de
              la teva oïda i entra al conducte auditiu. Els audiòfons
              retroauriculars són el tipus més comú d'audiòfon.
            </p>
          </Col>
          <Col
            xs={{ order: "first" }}
            md={{ order: "last" }}
            sm={6}
            className=" divImagenPromo"
          >
            <img
              src="https://www.danavox.com/-/media/resound/resound-international/front-page/hearing-aids/types/new-styles/bte-animation.ashx?w=1600&usecustomfunctions=1&centercrop=1&hash=BDAA1F51D6FD4009016E2C08135B93DD"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </Col>
        </div>

        <div className="row">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://centroauditivoestaire.com/images/audifonos/tipos-audifono/audifonos-rie-01.jpg"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText">R.I.E.</h1>
            <p className="homeText2 serveisText">
              Els Audiòfons RIE són un tipus d'audiòfons que se serveixen per
              ajudar a corregir un problema d'audició. Les seves sigles
              corresponen a Receiver In-the-Ear, la traducció més encertada de
              la qual seria «audiòfons amb auricular inserit a l'orella».
              Destaquen per la seva discreció, ja que la carcassa es col·loca
              darrere de l'orella del pacient, mentre que l'auricular s'ha
              d'introduir a l'orella externa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
