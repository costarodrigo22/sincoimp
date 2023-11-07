import { Toaster } from "react-hot-toast";
import Router from "./Router";
import { GlobalStyles } from "./theme/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./app/contexts/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import LateralmenuProvider from "./app/contexts/LateralMenuContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AuthProvider>
        <LateralmenuProvider>
          <ChakraProvider>
            <Toaster position="top-right" />
            <Router />
          </ChakraProvider>
        </LateralmenuProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
