import React from "react";
import Noia1 from "../../img/Imatges_noia_home/noia_1.png";
import Noia2 from "../../img/Imatges_noia_home/noia_2.png";
import Noia3 from "../../img/Imatges_noia_home/noia_3.png";

function FinalHome() {
  return (
    <div className="divFinalHome">
      <div>
        <h1 className="h11FinalHome">
          Les ulleres estarán llestes en tan sols 3 pasos
        </h1>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className="divh12">
        <h1 className="h12FinalHome">
          Fem la prova ocular per a saber les dioptries
        </h1>
        <div>
          <img className="image13" src={Noia1} alt="imatgeNoia-1" />
        </div>
      </div>
      {/* ---------------------------------------------------------------------------*/}
      <div className="divh12">
        <div>
          <img className="image2" src={Noia2} alt="imatgeNoia-2" />
        </div>
        <h1 className="h12FinalHomeR">
          Escull la muntura que més t'agradi i s'adapti al teu estil de vida
        </h1>
      </div>
      {/* -------------------------------------------------------------------------- */}
      <div className="divh12">
        <h1 className="h12FinalHome">
          Vine a buscar-les a la botiga una vegada ja estiguin muntades
        </h1>
        <div>
          <img className="image13" src={Noia3} alt="imatgeNoia-3" />
        </div>
      </div>
    </div>
  );
}

export default FinalHome;
