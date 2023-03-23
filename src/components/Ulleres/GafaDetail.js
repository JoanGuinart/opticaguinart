import React from "react";

const GafaDetail = ({products}) => {

  return (
    <div>
      <h1 className="text-center">El mès venut</h1>
      <div className="container">
        <div className="row centerRow">
        
              <div className="col-md-3 col-sm-3 col-6 contenedorGafa">
                <div className="tituloGafa">
                  <p className="textoTitulo">{marca}</p>
                </div>
                <br />
                <div className="fit-imagen-gafa">
                  <img
                    src={urlImagen}
                    alt="Imagen gafa"
                    className="fotoGafa"
                  />
                </div>
                <br />
                <div className="textoGafa">
                  <p>{modelo}</p>
                  <h5>{precio} €</h5>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default GafaDetail;
