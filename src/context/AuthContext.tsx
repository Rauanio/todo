import React, { createContext } from 'react';

interface AuthContextProps {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};


const useAuthContext = () => {
  return React.useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
