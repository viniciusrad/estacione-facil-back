import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

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
} 