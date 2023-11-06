import { createContext, useCallback, useState } from "react";

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
  const [signedIn, setSignedIn] = useState(false);

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem("sincoimp:accessToken", accessToken);

    setSignedIn(true);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin }}>
      {children}
    </AuthContext.Provider>
  );
}
