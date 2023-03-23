import { Link } from "react-router-dom";

const Home2 = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-8 divImagenPromo">
            <img
              src="https://img.freepik.com/foto-gratis/vista-frontal-mano-que-sostiene-par-anteojos_23-2148429660.jpg?w=1380&t=st=1668197173~exp=1668197773~hmac=66793ccde952b6bb2fe5e56bb2d3fea90d3f7941d2c76c90725c93a69d2c917e"
              alt="imagenPromo"
              className="imagenPromo parpadea text"
            />
          </div>
          <div className="col-4 text-center">
            <h1 className="homeTitleText">OPTICA GUINART</h1>
            <p className="homeText"> <br/>
              TOTES LES MARQUES <br/> <br/> </p>
            <p className="homeText">
              ELS MILLORS PREUS <br/> <br/> </p>
            <a
                  href="https://api.whatsapp.com/send?phone=+34682502960&text=Hola!%20%F0%9F%98%8E%20Quería%20informaci%C3%B3n%20sobre:"
                  target="_blank"
                  className="homeText"
                  rel="noreferrer"
                >
                  ATENCIÓ PERSONALITZADA
                </a> <br/> <br/>              
            <Link to="/ulleres" className="homeText">
              ULLERES <br/> <br/> </Link>
            <Link to="/lents" className="homeText">
              LENTS DE CONTACTE <br/> <br/> </Link>
            <Link to="/audiometria" className="homeText">
              AUDIÒFONS <br/> <br/> </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
