import { createContext, useContext, useEffect, useReducer } from "react";
import { getCurrentUser } from "../../firebase-config";
import { authReducer, initialState } from "./reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    (async () => {
      getCurrentUser(dispatch);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
