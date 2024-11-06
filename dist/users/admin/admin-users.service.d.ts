import { AdminUser } from './entities/admin-user.entity';
import { UserType } from './enums/user-type.enum';
import { BaseUserDto } from './dto/base-user.dto';
import { User } from './entities/user.entity';
export declare class AdminUsersService {
    private users;
    create(createUserDto: BaseUserDto): User;
    findAll(): AdminUser[];
    findOne(id: number): AdminUser;
    findByType(tipo: UserType): AdminUser[];
    findByEmail(email: string): AdminUser | undefined;
    findByCpf(cpf: string): AdminUser | undefined;
    update(id: number, updateUserDto: Partial<AdminUser>): AdminUser;
    remove(id: number): void;
    getAllMockUsers(): AdminUser[];
}
