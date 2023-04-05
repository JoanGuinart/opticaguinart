import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./assets/css/App.css";
import { MiCuenta } from "./components/MiCuenta/MiCuenta";
import Gafas from "./components/Ulleres/Gafas";
import { Register } from "./components/Login & Register/Register";
import NavBar from "./components/Navbar & Footer/NavBar";
import { Login } from "./components/Login & Register/Login";
import { AuthProvider } from "./context.js/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoutes/ProtectedRoutes";
import { Serveis } from "./components/Serveis/Serveis";
import AddGafas from "./components/C.R.U.D/CrearGafas";
import ListaGafas from "./components/C.R.U.D/ListaGafas";
import { useState } from "react";
import Footer from "./components/Navbar & Footer/Footer";
import { LentsDeContacte } from "./components/LentsDeContacte/LentsDeContacte";
import { Audiometria } from "./components/Audiometria/Audiometria";
import { Accesoris } from "./components/Accessoris/Accesoris";
import { ProtectedRouteUid } from "./components/ProtectedRoutes/ProtectedRoutesUid";
import { Home } from "./components/Home/Home";

function App() {
  const [gafaId, setgafaId] = useState("");

  console.log(console.log(process.env.REACT_APP_FIREBASE_API_KEY))

  const getGafaIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setgafaId(id);
  };

  return (
    <div>
      <NavBar />

      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/ulleres" element={<Gafas />} />
          <Route path="/lents" element={<LentsDeContacte />} />
          <Route path="/serveis" element={<Serveis />} />
          <Route path="/audiometria" element={<Audiometria />} />
          <Route path="/accesoris" element={<Accesoris />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/micuenta"
            element={
              <ProtectedRoute>
                <MiCuenta />
              </ProtectedRoute>
            }
          />

          <Route
            path="/adminjuanignacioguinart_optica"
            element={
              <ProtectedRouteUid>
                <AddGafas id={gafaId} setGafaId={setgafaId} />
                <ListaGafas getGafaId={getGafaIdHandler} />
              </ProtectedRouteUid>
            }
          />

          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
