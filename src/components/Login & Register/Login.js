import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context.js/AuthContext";
import { Alert } from "../C.R.U.D/Alert";


export const Login = () => {

 

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, resetPassword } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/micuenta"); 
    } catch (error) {
      if(error.code === "auth/invalid-email"){
        setError('Correo Invalido!')
      } 
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  /* const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/micuenta");
    } catch (error) {
      setError(error.message);
    }
  }; */

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Escribe un email para resetear tu contraseña");
    try {
      await resetPassword(user.email);
      setError('Te acabamos de enviar un email, revisa tu buzón')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="anchoSignUp">
      {error && <Alert message={error} />}

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
            name="email"
            id="email"
            onChange={handleChange}
            className="form-control"
            placeholder="youremail@company.tld"
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
            name="password"
            id="password"
            onChange={handleChange}
            className="form-control"
            placeholder="* * * * * *"
          />
        </div>
       

        <div className="mb-3">
          <button
            className="btn btn-outline-success"
            type="submit"
          >
            Iniciar Sesión
          </button>
          <a
            className="btn btn-outline-success"
            href="#!"
            onClick={handleResetPassword}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>

      {/* <button
        onClick={handleGoogleSignin}
        className="btn btn-outline botonDos"
      >
        Google login
      </button> */}
    </div>
  );
}