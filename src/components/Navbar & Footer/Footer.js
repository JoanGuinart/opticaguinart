/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";

function Footer() {
  return (
    <div className="divFooter">
      <footer className="container footer">
        <div className="footerContent row">
          <div className="col-md-3">
            <div className="titulosFooter ">Sobre nosaltres</div>
            <SiGooglemaps className="iconGoogleMaps" />
            <a
              href="https://www.google.com/maps/place/Optica+Guinart/@41.4371149,2.1896783,15z/data=!4m2!3m1!1s0x0:0xa4b5922d46c1e48d?sa=X&ved=2ahUKEwjp6vPbsb37AhXR_7sIHTNCDeMQ_BJ6BAhSEAg"
              target="_blank"
              className="textoAboutus"
              rel="noreferrer"
            >
              Gran de Sant Andreu 308 Barcelona 08030
            </a>
          </div>
          <div className="col-md-3">
            <div className="titulosFooter">Contacta'ns</div>
            <div className="Contact">
              <AiOutlinePhone className="" />
              <a href="tel:+34933118706" className="phone">
                +34 933118706
              </a>
              <br />
              <AiOutlinePhone className="" />
              <a href="tel:+34682502960" className="phone">
                +34 682502960
              </a>
            </div>
            <div className="">
              <a
                href="mailto:juanignacioguinart@gmail.com?Subject=Email%20cliente%20de%20la%20web"
                className="email"
              >
                juanignacioguinart@gmail.com
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="titulosFooter">Xarxes socials</div>
            <form>
              <div style={{ paddingBottom: "1rem", paddingTop: "1rem", width: "100%"}}>
                <a
                  href="https://www.instagram.com/opticaguinartsantandreu/"
                  target="_blank"
                  className="instagram mediaIcons"
                  rel="noreferrer"
                >
                  <BsInstagram style={{ transform: "scale(1.5)" }} />
                </a>
                <a
                  href="https://es-es.facebook.com/people/%C3%92ptica-Guinart/100080046515883/"
                  target="_blank"
                  className="facebook mediaIcons"
                  rel="noreferrer"
                >
                  <BsFacebook style={{ transform: "scale(1.5)" }} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20Quería%20informaci%C3%B3n%20sobre:"
                  target="_blank"
                  className="whatsapp mediaIcons"
                  rel="noreferrer"
                >
                  <BsWhatsapp style={{ transform: "scale(1.5)" }} />
                </a>
              </div>
              <p className="textCopy">
                Copyright © 2022{" "}
                <a
                  href="https://joanguinart.github.io/Portfolio/"
                  target="_blank"
                  className="text-light"
                  rel="noreferrer"
                >
                  Guinart
                </a>{" "}
                All rights reserved
              </p>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
