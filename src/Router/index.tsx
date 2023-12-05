import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthGuard } from "./AuthGuard";
import { Login } from "../Views/pages/Login";
import { AppLayout } from "./Layouts/AppLayout";
import Header from "../Views/pages/Header";
import Welcome from "../Views/pages/Welcome";
import Benefits from "../Views/pages/Benefits";

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
            <Route
              path="/pagamento-funcionario"
              element={<h1>Pagamento funcionário</h1>}
            />
            <Route
              path="/pagamento-empresa"
              element={<h1>Pagamento empresa</h1>}
            />
            <Route
              path="/repasse-sindical-relatorio"
              element={<h1>Repasse sindical relatório</h1>}
            />
            <Route path="/cabecalho" element={<Header />} />
            <Route path="/boas-vindas" element={<Welcome />} />
            <Route path="/beneficios" element={<Benefits />} />
            <Route path="/noticias" element={<h1>Notícias</h1>} />
            <Route path="/vantagens" element={<h1>Vantagens</h1>} />
            <Route path="/rodape" element={<h1>Rodapé</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
