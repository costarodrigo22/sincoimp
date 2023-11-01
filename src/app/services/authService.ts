import { httpClient } from "./httpClient";

export interface singInProps {
  cpf: string;
  senha: string;
}

interface responseDataSingIn {
  data: {
    access_token: string;
    token_type: string;
    associado: {
      id: string;
      nome: string;
      rg: string;
      cpf: string;
      data_nascimento: string;
      email: string;
      telefone: string;
      celular: string;
      cep: string;
      rua: string;
      bairro: string;
      complemento: string;
      referencia: string;
      cidade: string;
      estado: string;
      foto: string;
      ativo: boolean;
      perfil_id: string;
      empresa_conveniada_id: string;
      created_at: string;
      updated_at: string;
    };
  };
}

async function singIn(params: singInProps) {
  const { data } = await httpClient.post<responseDataSingIn>(
    "/api/login",
    params
  );

  return data;
}

export const authService = {
  singIn,
};
