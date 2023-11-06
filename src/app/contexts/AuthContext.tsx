import { createContext, useCallback, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";

interface AuthContextProps {
  signedIn: boolean;
  signin: (accessToken: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storeAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN
    );

    return !!storeAccessToken;
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
