import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context.js/AuthContext";
import { Alert } from "../C.R.U.D/Alert";
export const Register = () => {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if(error.code === "auth/invalid-email"){
        setError('Correo Invalido!')
      } else if (error.code === "auth/weak-password"){
        setError('Contraseña floja, almenos debe contener 6 carácteres')
      } else if (error.code === "auth/email-already-in-use"){
        setError('Este correo ya está registrado')
      }
    }
  };

  return (
    <div className="anchoSignUp">
      {error && <Alert message={error} />}
      <h3>Registro</h3>
      <form
        onSubmit={handleSubmit}
        className=""
      >
        <div className="mb-3">
          <label
            htmlFor="email"
            className=""
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="form-control"
            placeholder="TuEmail@compañia.tld"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="password"
            className=""
          >
            Contraseña
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="form-control"
            placeholder="* * * * * *"
          />
        </div>

        <button className="btn btn-outline-success mb-3">
          Registar-se
        </button>
      </form>
      <p className="">
        ¿Ya tienes una cuenta?
        <Link to="/login" className="botonRegister">
          Login
        </Link>
      </p>
    </div>
  );
}


/* 
aixo va al login s es vol
 <p className="">
        ¿No tienes una cuenta? 
        <Link to="/register" className="botonLogin">
          Registrate
        </Link>
      </p>
*/