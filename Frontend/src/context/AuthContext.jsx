import React, { createContext, useState } from "react";

export const AuthDataContext = createContext();

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState({
        email: '',
        fullName: {
            firstName: '',
            lastName: ''
        }
    }) 
  return (
    <AuthDataContext.Provider value={{ user, setUser }}>
      {children}
    </AuthDataContext.Provider>
  );
};
export default AuthContext