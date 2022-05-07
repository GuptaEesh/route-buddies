import { createContext, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const token = "sdf";
  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
