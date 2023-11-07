import { Toaster } from "react-hot-toast";
import Router from "./Router";
import { GlobalStyles } from "./theme/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./app/contexts/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";

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
        <ChakraProvider>
          <Toaster position="top-right" />
          <Router />
        </ChakraProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
