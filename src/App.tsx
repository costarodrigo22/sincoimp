import { Toaster } from "react-hot-toast";
import Router from "./Router";
import { GlobalStyles } from "./theme/GlobalStyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./app/contexts/AuthContext";

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
      <AuthProvider>
        <GlobalStyles />
        <Toaster position="top-right" />
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
