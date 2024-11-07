import { IsEmail, IsString, IsNotEmpty, Length, IsEnum } from 'class-validator';
import { UserType } from '../../admin/enums/user-type.enum';

export class CreateProprietarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(11, 11)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  senha: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;
} 