import React from "react";
import { Col } from "react-bootstrap";

export const Serveis = () => {
  return (
    <div>
      <title>Optica Guinart</title>
      <h1 className="TituloLentillas">Serveis</h1>
      <div className="container">
        <div className="row mb-3">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://navaophthalmic.com/wp-content/uploads/2018/02/Zeiss-VISUPHOR-500-Phoropter-a.jpg"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText" style={{ marginTop: "1rem" }}>
              Exàmen visual
            </h1>
            <p className="serveisText" style={{ marginTop: "7rem" }}>
              La unitat de refracció subjectiva ZEISS (SRU) (formada per ZEISS
              VISUPHOR500 i ZEISS VISUSCREEN 100 o 500) redueix l'estrès i el
              temps de refracció i ofereix a professionals de la visió i als
              clients unes proves veritablement ràpides i còmodes.
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
            <h1 className="homeTitleText" style={{ marginTop: "1rem" }}>
              Examen auditiu
            </h1>
            <p className="serveisText" style={{ marginTop: "7rem" }}>
              Les cabines audiomètriques són utilitzades per realitzar
              audiometries per les seves excel·lents condicions acústiques. Les
              seves parets estan perfectament aïllades acústicament, impedint
              que el pacient, que es troba dins del moment de l'audiometria,
              escolti qualsevol tipus de soroll exterior. Així podem realitzar
              el exàmen auditiu en perfectes condicions.
            </p>
          </Col>
          <Col
            xs={{ order: "first" }}
            md={{ order: "last" }}
            sm={6}
            className=" divImagenPromo"
          >
            <img
              src="https://img.medicalexpo.es/images_me/photo-g/74782-12695935.webp"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </Col>
        </div>

        <div className="row">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://www.theeyecompany.com/wp-content/uploads/2015/07/IMG_1847.jpg"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText" style={{ marginTop: "1rem" }}>
              Presió Ocular
            </h1>
            <p className="serveisText" style={{ marginTop: "7rem" }}>
              La tonometria és un examen que mesura la pressió dins dels ulls.
              L'examen s'utilitza per detectar si hi ha glaucoma i per verificar
              què tan bé funciona el tractament per al glaucoma.
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
            <h1 className="homeTitleText" style={{ marginTop: "1rem" }}>
              Presició
            </h1>
            <p className="serveisText" style={{ marginTop: "7rem" }}>
              Una biselladora compacta amb ranurat i mata tall, ideal per a
              treballs en lents d'alta qualitat amb resultats excepcionals. Weco
              E1 és el resultat de combinar les millors tecnologies de
              Briot/Weco, amb funcions accessibles mitjançant una interfície
              senzilla mitjançant icones i pantalla tàctil d'alta resolució.
              Així podem garantitzar la adaptació perfecte dels vidres a la teva
              muntura preferida.
            </p>
          </Col>
          <Col
            xs={{ order: "first" }}
            md={{ order: "last" }}
            sm={6}
            className=" divImagenPromo"
          >
            <img
              src="http://www.drewes.com.ar/newsletter2018/news195/e1.jpg"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </Col>
        </div>

        <div className="row">
          <div className="col-sm-6 divImagenPromo">
            <img
              src="https://img.freepik.com/fotos-premium/persona-sostenga-gafas-mano-cerca_185193-13286.jpg?w=2000"
              alt="imagenPromo"
              className="imagenPromo m-3"
            />
          </div>
          <div className="col-sm-6 text-center">
            <h1 className="homeTitleText">Atenció personalitzada</h1>
            <p className="serveisText">
              A Òptica Guinart, ens esforcem per brindar una atenció propera a
              cadascun dels nostres clients. Com un negoci familiar, valorem
              cada client i ens prenem el temps per entendre les seves
              necessitats i preocupacions. Des de la tria de les muntures fins a
              la selecció de lents, treballem amb tu per trobar la millor
              solució per a la teva visió. A més, la nostra atenció no acaba amb
              la venda, seguim estant disponibles per respondre qualsevol
              pregunta i brindar el suport necessari per garantir que et sentis
              satisfet amb la teva compra. Seràs tractat com un membre de la
              nostra família i treballarem junts per cuidar la teva salut
              visual.
            </p>
          </div>
        </div>
      </div>
    </div>

    /*  
            
    
      
      <div className="container">
        <div className="row">
          <div className="col-6">Atencion Personalizada</div>
          <div className="col-6">
            <img className="imagenServeis" src="https://ae01.alicdn.com/kf/H1194e2569ef349ea8ae82c841d92a952O/M-quina-de-calentamiento-ptico-de-gran-potencia-calentador-de-gafas-marcos-de-gafas-de-acetato.jpg_Q90.jpg_.webp" alt="imagenServeis"/>
          </div>
        </div>
      </div>
    </div> */
  );
};
