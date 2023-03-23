/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import GafasDataService from "../services/Gafas.services";
import MiniLogo from "../../img/ulleres-soles-logo.svg"
import { BsWhatsapp } from "react-icons/bs";
/* import { useAuth } from "../../context.js/AuthContext";
/* import {AiOutlineHeart} from "react-icons/ai"
import {FcLike} from "react-icons/fc" */
/* import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase"; */


const Gafas = () => {
  const [gafas, setGafas] = useState([]);
  /*  const [carrito, setCarrito] = useState([]);
  
  console.log(carrito); */

  

 /*  const { user } = useAuth(); */

  //COMENTADO PARA NO GASTAR LLAMADAS A FIREBASE:
  useEffect(() => {
    getGafas();
  }, []);

  const getGafas = async () => {
    const data = await GafasDataService.getAllGafas();
    setGafas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

 /*  const addCarrito = ({ doc }) => {
    const item = gafas.find((gafa) => gafa.id === doc.id);
    setCarrito(item);
  }; */

 
      gafas.sort((a,b) => (a.marca > b.marca) ? 1 : ((b.marca > a.marca) ? -1 : 0))    
  
 
 /*  function ordenarModelo(x) {
    return (
      x.sort((a,b) => (a.modelo > b.modelo) ? 1 : ((b.modelo > a.modelo) ? -1 : 0))
    )
  }

  const ordenarPrecio = () => {
    return (
      gafas.sort((a,b) => (a.precio > b.precio) ? 1 : ((b.precio > a.precio) ? -1 : 0))
    )
  } */

  

  

 /*  function giveLike(docu) {
    const item = gafas.find((gafa) => gafa.id === docu.id)
    const path = 'gafas/' + item.id + '/like'
    console.log(path)
    const data = {
      Uid: user.uid,
      user: null,
      fecha: new Date(),
      like: true
    }
    console.log(data)
    setDoc(doc(db, "gafas", item.id, 'likes', user.uid), data)
  }


  
  let like = Boolean(false)
//IMPORTAR ELS LIKES DE CADA USUARI FETS 
   function loadLikeUser(doc) {
    const item = gafas.find((gafa) => gafa.id === doc.id)
    getDoc(item.id, user.uid)
    
  }  
 console.log(loadLikeUser) */


 function getDriveImageSrc(url) {
  if (!url) return null; 
  const imageId = url.match(/[-\w]{25,}/);
  return 'https://drive.google.com/uc?id=' + imageId[0];
}



  return (
    <div>
      <div className="miniLogo">
      <img src={MiniLogo} alt="minilogo"/>
      </div>
      <h5 className="text-center tituloGafas"> 
        Les més populars
        </h5>
      <div className="container">
        <div className="row centerRow">
          {gafas.map((doc, index) => {
            const imageUrl = getDriveImageSrc(doc.urlImagen);
            console.log(imageUrl)
            return (
            
              <div
                key={index}
                className="col-md-3 col-sm-4 col-6 contenedorGafa"
              >
                <div className="tituloGafa">
                  <p className="textoTitulo">{doc.marca}</p>
                </div>
                <br />
               
                <div className="fit-imagen-gafa">
                  <img
                    src={imageUrl}
                    alt="Imagen gafa"
                    className="fotoGafa"
                  />
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
                  M'interessa {` `} <BsWhatsapp style={{color: "green"}}/>
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
      <p style={{textAlign: "center", color: "grey", fontSize: "12px"}}>*Tots els models d'ulleres es poden graduar y/o demanar amb altres colors disponibles*</p>
    </div>
  );
};

export default Gafas;
