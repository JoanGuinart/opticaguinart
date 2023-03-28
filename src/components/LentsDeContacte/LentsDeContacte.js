/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import PopUpLentsDeContacte1 from "./PopUps/PopUpLentsDeContacte";
import PopUpLentsDeContacte2 from "./PopUps/PopUpLentsDeContacte2";
import PopUpLentsDeContacte3 from "./PopUps/PopUpLentsDeContacte3";
import PopUpLentsDeContacte4 from "./PopUps/PopUpLentsDeContacte4";

export const LentsDeContacte = () => {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [buttonPopup2, setbuttonPopup2] = useState(false);
  const [buttonPopup3, setbuttonPopup3] = useState(false);
  const [buttonPopup4, setbuttonPopup4] = useState(false);

  return (
    <div className="sizeLents">
      <h1 className="TituloLentillas">Lents de contacte</h1>
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://drive.google.com/uc?id=1NgRVEB0JLzWeM1Jkq-qSv3SZ0WLZPoFD"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText">Hidrogel</h1>
            <div className="textDescripcio">
              Les lents d'hidrogel estan fetes de plàstics amb forma de gel, que
              contenen aigua, anomenats hidrogels. Aquestes lents són molt
              primes i flexibles i sʻajusten a la superfície frontal de lʻull.{" "}
              <br />
              <br />
              <b>Disponibles en:</b> <br />
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup(true)}
              >
                <li className="popup">
                  Un sol ús diaries <br />
                </li>
              </button>
              <br/>
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup2(true)}
              >
                <li className="popup">
                  Mensuals <br />
                </li>
              </button>
              <br/>
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup3(true)}
              >
                <li className="popup">Lents tòriques(astigmatisme)</li>
              </button>
              <br/>
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup4(true)}
              >
                <li className="popup">Progresives</li>
              </button>
            </div>
            <div></div>
          </div>
        </div>

        <div className="row mb-3">
          <Col
            xs={{ order: "last" }}
            md={{ order: "first" }}
            sm={6}
            className=" text-center"
          >
            <h1 className="homeTitleText">Hidrogel de silicona</h1>
            <div className="textDescripcio">
              Material d'última generació, més flexible i ultratranspirable, que
              fa les delícies d'usuaris primerencs gràcies als alts nivells
              d'hidratació i confort. A diferència de les lents de contacte
              toves tradicionals, les d'hidrogel de silicona estan dissenyades
              per deixar passar més oxigen i prevenir la sequedat ocular,
              proporcionant-te una vista més nítida. <br />
              <b>Disponibles en:</b> <br />
              <br />
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup(true)}
              >
                <li className="popup">
                  Un sol ús diaries <br />
                </li>
              </button>
              <br/>
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup2(true)}
              >
                <li className="popup">
                  Mensuals <br />
                </li>
              </button>
              <br/>
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup3(true)}
              >
                <li className="popup">Lents tòriques(astigmatisme)</li>
              </button>
              <br/>
              <button
                className="buttonPopup"
                onClick={() => setbuttonPopup4(true)}
              >
                <li className="popup">Progresives</li>
              </button>
            </div>

            <div>
              <PopUpLentsDeContacte1
                trigger={buttonPopup}
                setTrigger={setbuttonPopup}
              >
                <h3>LENTS DIÀRIES</h3>
                <div>
                  Un sol ús diaries: <br />
                  <ol className="olLents">
                    Hi ha un temps màxim dús recomanat, és preferible no
                    portar-les posades més de 8 o 10 hores. No excedir-se en el
                    temps dús evita irritacions.
                  </ol>
                  <ol className="olLents">
                    Segueix les instruccions d'higiene i, si necessites fer-ho,
                    neteja les teves lents de contacte només amb{" "}
                    <b>líquid de lents de contacte específic</b>, i no amb
                    aigua.
                  </ol>
                  <ol className="olLents">
                    Tira les teves lents de contacte al final del dia. No tornis
                    a fer-les servir al dia següent, doncs es tracta d'un
                    producte d'un sol ús.
                  </ol>
                </div>
              </PopUpLentsDeContacte1>
            </div>

            <div>
              <PopUpLentsDeContacte2
                trigger2={buttonPopup2}
                setTrigger2={setbuttonPopup2}
              >
                <h3>LENTS MENSUALS</h3>
                <ol className="olLents">
                  Les lents de contacte mensuals duren un mes, com el seu nom
                  indica. Quant al nombre d'hores diàries que les pots portar,
                  depèn de com et sentis de còmoda. Fins a 12 hores al dia no hi
                  sol haver cap problema. Tot i que és millor que comencis amb
                  períodes més curts i vagis acostumant a l'ull.
                </ol>
                <ol className="olLents">
                  Per netejar-les, segueix les instruccions del fabricant i
                  utilitza sempre líquid de lents de contacte i solucions
                  específiques.
                </ol>
              </PopUpLentsDeContacte2>
            </div>

            <div>
              <PopUpLentsDeContacte3
                trigger3={buttonPopup3}
                setTrigger3={setbuttonPopup3}
              >
                <h3>LENTS TÒRIQUES</h3>
                <ol className="olLents">
                  Dissenyades per corregir els problemes d'astigmatisme.
                </ol>
                <ol className="olLents">
                  La seva forma ovalada crea diferents graus o tipus de
                  refracció tant a la seva orientació vertical com horitzontal.
                </ol>
                <ol>Disponibles en Diàries i Mensuals.</ol>
              </PopUpLentsDeContacte3>
            </div>

            <div>
              <PopUpLentsDeContacte4
                trigger4={buttonPopup4}
                setTrigger4={setbuttonPopup4}
              >
                <h3>LENTS PROGRESIVES</h3>
                <ol className="olLents">
                  Dissenys de visió simultània per a visió llunyana i propera (i
                  a vegades intermitja). Depenent de l'objecte que es miri,
                  l'ull fa servir les zones de la lent que proporcionen la visió
                  més nítida.
                </ol>
                <ol className="olLents">
                  Dissenys segmentats. Les zones central i superior de la lent
                  ajuden a veure objectes distants, i la part inferior de la
                  lent per veure objectes propers.
                </ol>
                <ol className="olLents">
                  Escullis el que escullis, recorda que, per tenir-ne cura, cal
                  utilitzar líquid online per a lents de contacte i no
                  excedir-se del temps d'ús en lents de contacte diàries o lents
                  de contacte mensuals.
                </ol>
              </PopUpLentsDeContacte4>
            </div>
          </Col>
          <Col
            xs={{ order: "first" }}
            md={{ order: "last" }}
            sm={6}
            className=" divImagenPromo"
          >
            <img
              src="https://drive.google.com/uc?id=1tXQYGu7mm4M1zxplTI_eWI_shOBK1Dwa"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </Col>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 divImagenPromo">
          <img
            src="https://drive.google.com/uc?id=1Hw4R2a5SS7c9a6f4f6WPC9jS2lSlNPoD"
            alt="imagenPromo"
            className="imagenPromo m-3"
          />
        </div>
        <div className="col-sm-6">
          <h1 className="homeTitleText">Cosmètiques</h1>
          <p className="textDescripcio">
            Les lents de contacte de colors són lents de contacte especialment
            dissenyades per permetre als usuaris canviar el seu color d'ulls, ja
            sigui per a cada dia o per a ocasions especials
          </p>
        </div>
      </div>
    </div>
  );
};
