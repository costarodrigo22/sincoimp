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
            <Route path="/" element={<h1>Bem-vindo</h1>} />
            <Route
              path="/funcionario-sindicato"
              element={<h1>Funcionário do Sindicato</h1>}
            />
            <Route path="/empresa" element={<h1>Empresa</h1>} />
            <Route
              path="/empresa-conveniada"
              element={<h1>Empresa Conveniada</h1>}
            />
            <Route
              path="/receita-funcionario"
              element={<h1>Receita Funcionário</h1>}
            />
            <Route path="/receita-empresa" element={<h1>Receita empresa</h1>} />
            <Route
              path="/repasse-sindical"
              element={<h1>Repasse sindical</h1>}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
