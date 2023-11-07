import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../services/users";
import toast from "react-hot-toast";
import LounchScreen from "../../global/components/LounchScreen";

interface AuthContextProps {
  signedIn: boolean;
  signin: (accessToken: string) => void;
  signout: () => void;
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

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: () => usersService.listUsers(),
    enabled: signedIn,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      signout();

      toast.error("Sua sessão expirou");
    }
  }, [isError, signout]);

  if (isFetching) return <LounchScreen isLoading={isFetching} />;

  return (
    <AuthContext.Provider
      value={{ signedIn: isSuccess && signedIn, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
