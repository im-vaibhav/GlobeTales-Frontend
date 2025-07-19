import { createContext, useContext, useReducer } from "react";
import axios from "axios";

const AuthContext = createContext();
const BACKEND_URL="http://127.0.0.1:9000/api"
const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function handleSignUp(name, email, password) {
    try {
      const res = await axios.post(`${BACKEND_URL}/user/signup`, {
        name,
        email,
        password,
      });
      dispatch({ type: "login", payload: res.data.user });
      console.log(res.token);
      localStorage.setItem("token", res.data.token);

    } catch (err) {
      console.log("error");
    }
  }
  async function handleLogin(password, email) {
    try {
      const res = await axios.post(`${BACKEND_URL}/user/login`, {
        email,
        password,
      });
      dispatch({ type: "login", payload: res.data.user });
      console.log(res);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.log("error");
    }
  }

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, handleSignUp,handleLogin,logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { AuthProvider, useAuth };


