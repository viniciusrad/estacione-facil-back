import { AdminUsersService } from './admin-users.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { AdminUser } from './entities/admin-user.entity';
export declare class ProprietarioController {
    private readonly adminUsersService;
    constructor(adminUsersService: AdminUsersService);
    create(createProprietarioDto: CreateProprietarioDto): Promise<AdminUser>;
    findAll(): AdminUser[];
    findOne(id: string): AdminUser;
    update(id: string, updateProprietarioDto: Partial<CreateProprietarioDto>): AdminUser;
    remove(id: string): void;
}
