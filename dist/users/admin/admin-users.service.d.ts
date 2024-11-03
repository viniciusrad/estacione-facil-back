import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { AdminUser } from './entities/admin-user.entity';
import { UserType } from './enums/user-type.enum';
export declare class AdminUsersService {
    private users;
    create(createUserDto: CreateAdminUserDto | CreateProprietarioDto | CreateClienteDto): AdminUser;
    findAll(): AdminUser[];
    findOne(id: number): AdminUser;
    findByType(tipo: UserType): AdminUser[];
    findByEmail(email: string): AdminUser | undefined;
    findByCpf(cpf: string): AdminUser | undefined;
    update(id: number, updateUserDto: Partial<AdminUser>): AdminUser;
    remove(id: number): void;
    getAllMockUsers(): AdminUser[];
}
