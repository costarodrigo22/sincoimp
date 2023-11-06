import { httpClient } from "../httpClient";

export interface Dependente {
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
  senha: string;
  ativo: string;
  created_at: string;
  updated_at: string;
  pivot: Pivot;
}

export interface Pivot {
  associado_id: string;
  dependente_id: string;
}

interface responseListuserDataProps {
  data: {
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
    dependente: Dependente[];
    perfil_id: string;
    empresa_conveniada_id: string;
    created_at: string;
    updated_at: string;
  };
}

export async function listUsers() {
  const { data } = await httpClient.get<responseListuserDataProps>(
    "/api/v1/associado/index"
  );

  return data;
}
