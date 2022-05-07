import { createContext, useContext,useReducer } from "react";
import { authReducer, initialState } from "./reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState,dispatch] = useReducer(authReducer,initialState);
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
