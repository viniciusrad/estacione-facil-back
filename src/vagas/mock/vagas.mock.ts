import { Vaga } from '../interfaces/vaga.interface';

export const VAGAS_MOCK: Vaga[] = [
  {
    id: '1',
    tipoVaga: 'coberta',
    tipoContratacao: 'hora',
    endereco: 'Rua Exemplo, 123',
    descricao: 'Descrição da vaga de estacionamento coberta',
    fotos: [],
    precoHora: '10.00',
    horaInicio: '08:00',
    horaFim: '18:00',
    proprietarioId: 'proprietario-1',
    status: 'disponivel',
    dataCriacao: new Date().toISOString(),
    dataAtualizacao: new Date().toISOString(),
  },
  {
    id: '2',
    tipoVaga: 'descoberta',
    tipoContratacao: 'diaria',
    endereco: 'Avenida Exemplo, 456',
    descricao: 'Descrição da vaga de estacionamento descoberta',
    fotos: [],
    precoDiaria: '50.00',
    diasDisponiveis: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
    proprietarioId: 'proprietario-2',
    status: 'disponivel',
    dataCriacao: new Date().toISOString(),
    dataAtualizacao: new Date().toISOString(),
  },
]; 