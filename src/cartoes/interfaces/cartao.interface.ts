export interface Cartao {
  id: string;
  nomeNoCartao: string;
  numeroCartao: string;
  codigoVerificacao: string;
  validade: string;
  salvarParaFuturos: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
} 