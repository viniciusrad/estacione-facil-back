import { IsNotEmpty, IsEnum, IsNumber, IsUUID, IsDateString, IsOptional, IsString } from 'class-validator';
import { TipoCobranca } from '../entities/agendamento.entity';

export class CreateAgendamentoDto {
  @IsNotEmpty()
  clienteId: string;

  @IsNotEmpty()
  vagaId: string;

  @IsNotEmpty()
  @IsEnum(TipoCobranca)
  tipoCobranca: TipoCobranca;

  @IsNotEmpty()
  @IsNumber()
  preco: number;

  @IsNotEmpty()
  @IsDateString()
  dataInicio: Date;

  @IsNotEmpty()
  @IsDateString()
  dataFim: Date;

  @IsOptional()
  @IsString()
  horarioInicio?: string;

  @IsOptional()
  @IsString()
  horarioFim?: string;
} 