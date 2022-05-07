import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../firebase-config";
import { authReducer, initialState } from "./reducer";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      getCurrentUser(dispatch, navigate);
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
