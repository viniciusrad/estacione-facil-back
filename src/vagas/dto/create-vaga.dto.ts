export class CreateVagaDto {
  tipoVaga: 'ambas' | 'coberta' | 'descoberta';
  tipoContratacao: 'hora' | 'diaria';
  endereco: string;
  descricao: string;
  fotos: string[];

  // Campos específicos para contratação por hora
  precoHora?: string;
  horaInicio?: string;
  horaFim?: string;

  // Campos específicos para contratação por diária
  precoDiaria?: string;
  diasDisponiveis?: string[];

  // Metadados
  proprietarioId: string;
  status: 'disponivel' | 'indisponivel';
} 