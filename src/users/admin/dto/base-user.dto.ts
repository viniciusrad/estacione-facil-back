import { IsString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';
import { UserType } from '../enums/user-type.enum';

export class BaseUserDto {

  @IsString()
  @IsNotEmpty()
  readonly nome: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly cpf: string;

  @IsString()
  @IsNotEmpty()
  readonly telefone: string;

  @IsString()
  @IsNotEmpty()
  readonly senha: string;

  @IsString()
  @IsNotEmpty()
  readonly tipo: UserType;
} 