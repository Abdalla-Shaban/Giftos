import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const initialState = {
  username: "",
  password: ""
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(initialState);
  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setUser(initialState);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
