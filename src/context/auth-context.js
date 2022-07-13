import { useState, useContext, createContext, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    token
      ? setAuth({ token: token, isLoggedIn: true })
      : setAuth({ token: "", isLoggedIn: false });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
