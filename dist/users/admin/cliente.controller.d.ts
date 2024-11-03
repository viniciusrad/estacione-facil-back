import { AdminUsersService } from './admin-users.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { AdminUser } from './entities/admin-user.entity';
export declare class ClienteController {
    private readonly adminUsersService;
    constructor(adminUsersService: AdminUsersService);
    create(createClienteDto: CreateClienteDto): Promise<AdminUser>;
    findAll(): AdminUser[];
    findOne(id: string): AdminUser;
    update(id: string, updateClienteDto: Partial<CreateClienteDto>): AdminUser;
    remove(id: string): void;
}
