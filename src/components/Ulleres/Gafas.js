/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import GafasDataService from "../services/Gafas.services";
import MiniLogo from "../../img/ulleres-soles-logo.svg";
import { BsWhatsapp } from "react-icons/bs";

const Gafas = () => {
  const [gafas, setGafas] = useState([]);
  const [ordenarPor, setOrdenarPor] = useState("Seleccionar");

  useEffect(() => {
    getGafas();
  }, []);

  const getGafas = async () => {
    const data = await GafasDataService.getAllGafas();
    setGafas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  function getDriveImageSrc(url) {
    if (!url) return null;
    const imageId = url.match(/[-\w]{25,}/);
    return "https://drive.google.com/uc?id=" + imageId[0];
  }

  useEffect(() => {
    switch (ordenarPor) {
      case "marca":
        ordenarPorMarca();
        break;
      case "preu":
        ordenarPorPrecio();
        break;
      case "disponibilitat":
        ordenarPorDisponibilidad();
        break;
      default:
        break;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ordenarPor]);

  function handleOrdenarPorChange(event) {
    setOrdenarPor(event.target.value);
  }

  function ordenarPorMarca() {
    setGafas([...gafas].sort((a, b) => a.marca.localeCompare(b.marca)));
    setOrdenarPor("marca");
  }

  function ordenarPorPrecio() {
    setGafas([...gafas].sort((a, b) => a.precio - b.precio));
    setOrdenarPor("preu");
  }

  function ordenarPorDisponibilidad() {
    setGafas([...gafas].sort((a, b) => b.disponibilidad.localeCompare(a.disponibilidad)));
    setOrdenarPor("disponibilitat")
    console.log(ordenarPor)
  }

 

  return (
    <div>
      <div className="containerOrdenarPorButton">
        <label htmlFor="ordenarPorSelect" className="ordenarPorButton">
          Ordenar per:
        </label>
        <select
          id="ordenarPorSelect"
          className="ordenarPorButton"
          value={ordenarPor}
          onChange={handleOrdenarPorChange}
        >
          <option value="Seleccionar">Seleccionar</option>
          <option value="marca">Marca</option>
          <option value="preu">Preu</option>
          <option value="disponibilitat">Disponibilitat Inmediata</option>
        </select>
      </div>
      <div className="miniLogo">
        <img src={MiniLogo} alt="minilogo" />
      </div>
      <div className="ordenarPorContainer"></div>
      <h5 className="text-center tituloGafas">Les més populars</h5>
      <div className="container">
        <div className="row centerRow">
          {gafas.map((doc, index) => {
            const imageUrl = getDriveImageSrc(doc.urlImagen);
            return (
              <div
                key={index}
                className="col-md-3 col-sm-4 col-4 contenedorGafa"
              >
                <div className="tituloGafa">
                  <p className="textoTitulo">{doc.marca}</p>
                </div>
                <br />

                <div className="fit-imagen-gafa">
                  <img src={imageUrl} alt="Imagen gafa" className="fotoGafa" />
                </div>
                <br />
                <div className="textoGafa">
                  <p>{doc.modelo}</p>
                  <h5>{doc.precio} €</h5>
                  <p>{doc.disponibilidad}</p>
                </div>
                <div className="containerButtonShopping">
                  <a
                    href={`https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20%F0%9F%98%8E%20Estoy%20interesado%20en%20la%20gafa:%20${doc.marca}%20${doc.modelo}`}
                    target="_blank"
                    className="buttonShopping2"
                    rel="noreferrer"
                  >
                    M'interessa&nbsp;
                    <div>
                      <BsWhatsapp
                        style={{
                          color: "green",
                          padding: "1px",
                          marginBottom: "2px",
                          transform: "scale(1.9)",
                          maxWidth: "100%",
                        }}
                      />
                    </div>
                  </a>
                </div>
                {/* <a onClick={() => giveLike(doc)} className="divCorazonLike">
                  {!like && 
                  <AiOutlineHeart className="corazonLike"/>
                  } {like && 
                  <FcLike/>
                  }
                </a> */}
              </div>
            );
          })}
        </div>
      </div>
      <p style={{ textAlign: "center", color: "grey", fontSize: "12px" }}>
        *Tenim moltissimes marques i models, aqui només es mostren les mes venudes, si vols alguna marca o model que no surt aqui nomes has de contactar amb nosaltres via whatsapp / email o trucada i et respondrem en menys de 24h*
      </p>
      <p style={{ textAlign: "center", color: "grey", fontSize: "12px" }}>
        *Tots els models d'ulleres es poden graduar i/o demanar amb altres
        colors disponibles*
      </p>
    </div>
  );
};

export default Gafas;
