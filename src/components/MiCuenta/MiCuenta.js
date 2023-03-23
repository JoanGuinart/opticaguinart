import { Link } from "react-router-dom";
import { useAuth } from "../../context.js/AuthContext";
export const MiCuenta = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p className="text-xl mb-4">
          Bienvenido {user.displayName || user.email}
          {user.uid === "lVOt49yNhuX7bxLlsPHrPBWlAps1" && (
            <Link to="/adminjuanignacioguinart_optica">={">"} ADMIN</Link>
          )}
        </p>
        <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}
        >
          Cerrar Sessión
        </button>
      </div>
    </div>
  );
};


