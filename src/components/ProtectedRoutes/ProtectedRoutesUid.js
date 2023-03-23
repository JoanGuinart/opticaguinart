import { Navigate } from "react-router-dom";
import { useAuth } from "../../context.js/AuthContext";

export const ProtectedRouteUid = ({ children }) => {
  const { user, loading } = useAuth();
  

  if (loading) return <h1>Loading...</h1>;

  if (user.uid !== "lVOt49yNhuX7bxLlsPHrPBWlAps1") return <Navigate to="/login" />;

  

  return <>{children}</>;
}
