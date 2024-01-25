import { Navigate, useLocation } from "react-router-dom";
import { Layout } from "../setup/Layout";
import { useLoginStore } from "../stores/auth";
import axios from "axios";

export const ProtectedRoutes = () => {
  const session = useLoginStore((state) => state.session);
  const token = session?.token;
  if (!token) {
    return <Navigate to={`/login`} />;
  }

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return <Layout />;
};
