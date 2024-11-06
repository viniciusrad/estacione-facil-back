export interface Vaga {
  id: string;
  tipoVaga: 'ambas' | 'coberta' | 'descoberta';
  tipoContratacao: 'hora' | 'diaria';
  endereco: string;
  descricao: string;
  fotos: string[];
  precoHora?: string;
  horaInicio?: string;
  horaFim?: string;
  precoDiaria?: string;
  diasDisponiveis?: string[];
  proprietarioId: string;
  status: 'disponivel' | 'indisponivel';
  dataCriacao: string;
  dataAtualizacao: string;
} 