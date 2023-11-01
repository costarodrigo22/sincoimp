import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../Views/pages/Login";
import { AppLayout } from "./Layouts/AppLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Private routes */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/asso" element={<h1>Associados</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
