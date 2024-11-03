import { UserType } from '../enums/user-type.enum';
export declare class AdminUser {
    id: number;
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
    senha: string;
    tipo: UserType;
    createdAt: Date;
    updatedAt: Date;
}
