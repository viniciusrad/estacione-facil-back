import { Cartao } from '../interfaces/cartao.interface';

export const CARTOES_MOCK: Cartao[] = [
  {
    id: '1',
    nomeNoCartao: 'JOAO M SILVA',
    numeroCartao: '4111111111111111',
    codigoVerificacao: '123',
    validade: '12/25',
    salvarParaFuturos: true,
    userId: 'user-test-id',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    id: '2',
    nomeNoCartao: 'MARIA A SANTOS',
    numeroCartao: '5555555555554444',
    codigoVerificacao: '456',
    validade: '03/26',
    salvarParaFuturos: true,
    userId: 'user-test-id',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
  },
  {
    id: '3',
    nomeNoCartao: 'PEDRO C OLIVEIRA',
    numeroCartao: '3782822463100005',
    codigoVerificacao: '789',
    validade: '08/25',
    salvarParaFuturos: false,
    userId: 'user-test-id',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
  },
]; 