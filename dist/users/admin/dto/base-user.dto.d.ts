import { UserType } from '../enums/user-type.enum';
export declare class BaseUserDto {
    readonly nome: string;
    readonly email: string;
    readonly cpf: string;
    readonly telefone: string;
    readonly senha: string;
    readonly tipo: UserType;
}
