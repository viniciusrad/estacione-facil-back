import { AdminUsersService } from './admin-users.service';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { AdminUser } from '../entities/admin-user.entity';
import { UserType } from './enums/user-type.enum';
export declare class AdminUsersController {
    private readonly adminUsersService;
    constructor(adminUsersService: AdminUsersService);
    create(createAdminUserDto: CreateAdminUserDto): Promise<AdminUser>;
    findAll(tipo?: UserType): AdminUser[];
    findOne(id: string): AdminUser;
    update(id: string, updateAdminDto: Partial<AdminUser>): AdminUser;
    remove(id: string): void;
    getMockUsers(): AdminUser[];
}
