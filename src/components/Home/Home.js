/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import imgHome1 from "../../img/imgHome/Group 4 (1).png";
import imgHome2 from "../../img/imgHome/Group 5.png";
import logoPetit from "../../img/ulleres-soles-logo.svg";
import bannerMarcas from "../../img/imgHome/banner_gafas_home.png";
import gafaHome from "../../img/imgHome/gafas_wayfarer_home.png";
import lentillaHome from "../../img/imgHome/lentilla_png.png";
import audifonoHome from "../../img/imgHome/audifono_home.png";
import { Link } from "react-router-dom";
import FinalHome from "./FinalHome";

export const Home = () => {
  return (
    <div className="container containerGlobal">
      <title>Optica Guinart</title>
      <div className="primeraLinea">
        <div className="columnaLeft ">
          <img src={logoPetit} alt="imatge-minilogo" className="logoPetit1" />
          <br />
          <h1 className="TituloHome">Òptica Guinart, un nou punt de vista</h1>
          <br />
          <a
            href="https://www.google.com/maps/place/Optica+Guinart/@41.4371149,2.1896783,15z/data=!4m2!3m1!1s0x0:0xa4b5922d46c1e48d?sa=X&ved=2ahUKEwjp6vPbsb37AhXR_7sIHTNCDeMQ_BJ6BAhSEAg"
            target="_blank"
            className="button1Home"
            rel="noopener noreferrer"          >
            Visita'ns
          </a>
        </div>
        <div className="columnaRight ">
          <img src={imgHome1} alt="optica guinart imagen principal" className="imagen1Home" />
        </div>
      </div>

      <div className="text-center divBannerMarcas">
        <h3 className="confiaNosaltres">Els qui confien en nosaltres</h3>
        <img
          src={bannerMarcas}
          alt="optica guinart imagen marcas: rayban silouhette calvinklein carolinaherrera"
          className="bannerMarcasHome"
        />
      </div>

      <div className="segonaLinea row">
        <div className="col-5 linea2Col1">
          <img src={imgHome2} alt="optica guinart imagen dos" className="imagenHome2" />
        </div>
        <div className="col-7 linea2Col2">
          <h2 className="textLinea2Col2">Assesorament personalitzat</h2>
          <p className="text2Linea2Col2">
            A lòptica ens encarreguem de donarte els millors consells per a que
            trobis les ulleres que més t'encaixen tant per salut, estètica i
            estil de vida.
          </p>
        </div>
      </div>

      <div className="terceraLinea row">
        <h5 className="text-center titolLinea3">Les nostres col.leccions</h5>
        <div className="col-3 contenedorGafa">
          <div className="tituloGafa">
            <h1 className="textoTitulo2">ULLERES</h1>
          </div>
          <br />
          <div className="imagenGafaLinea3Home">
            <img
              src={gafaHome}
              alt="optica guinart imagen gafa"
              className="fotoGafaLinea3Home"
            />
          </div>
          <br />
          <div className="containerButtonShopping">
            <Link to="/ulleres" className="buttonShopping1 buttonShoppingHome">
              Mès detalls
            </Link>
          </div>
        </div>

        <div className="col-3 contenedorGafa">
          <div className="tituloGafa">
            <h1 className="textoTitulo2">LENTS DE CONTACTE</h1>
          </div>
          <br />
          <div className="imagenGafaLinea3Home">
            <img
              src={lentillaHome}
              alt="optica guinart imagen lentilla"
              className="fotoGafaLinea3Home"
            />
          </div>
          <br />
          <div className="containerButtonShopping">
            <Link to="/lents" className="buttonShopping1 buttonShoppingHome">
              Mès detalls
            </Link>
          </div>
        </div>

        <div className="col-3 contenedorGafa">
          <div className="tituloGafa">
            <h1 className="textoTitulo2">AUDIÒFONS</h1>
          </div>
          <br />
          <div className="imagenGafaLinea3Home">
            <img src={audifonoHome} alt="optica guinart imagen audifono" className="fotoGafa" />
          </div>
          <br />
          <div className="containerButtonShopping">
            <Link
              to="/audiometria"
              className="buttonShopping1 buttonShoppingHome"
            >
              Mès detalls
            </Link>
          </div>
        </div>
      </div>

      <div className="cuartaLinea">
        <FinalHome />
      </div>

       <div className="cinquenaLinea row">
        <h5 className="dubtes5 col-12">Tens més dubtes?</h5>
        
        <a
        href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20Quería%20informaci%C3%B3n%20sobre:"
        target="_blank"
        className="botonLinea5 col-12" rel="noopener noreferrer">Pregunta'ns per whatsapp</a>
      </div> 
    </div>
  );
};
