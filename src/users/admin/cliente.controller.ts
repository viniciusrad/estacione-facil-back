import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { AdminUser } from './entities/admin-user.entity';
import { UserType } from './enums/user-type.enum';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly adminUsersService: AdminUsersService) {}

  @Post('cadastro')
  async create(@Body() createClienteDto: CreateClienteDto): Promise<AdminUser> {
    try {
      const clienteData = {
        ...createClienteDto,
        tipo: UserType.CLIENTE
      };

      const existingUserEmail = this.adminUsersService.findByEmail(clienteData.email);
      const existingUserCpf = this.adminUsersService.findByCpf(clienteData.cpf);

      if (existingUserEmail) {
        throw new BadRequestException('Email já cadastrado');
      }

      if (existingUserCpf) {
        throw new BadRequestException('CPF já cadastrado');
      }

      return this.adminUsersService.create(clienteData);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll(): AdminUser[] {
    return this.adminUsersService.findByType(UserType.CLIENTE);
  }

  @Get(':id')
  findOne(@Param('id') id: string): AdminUser {
    const cliente = this.adminUsersService.findOne(+id);
    if (!cliente || cliente.tipo !== UserType.CLIENTE) {
      throw new BadRequestException('Cliente não encontrado');
    }
    return cliente;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: Partial<CreateClienteDto>): AdminUser {
    return this.adminUsersService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.adminUsersService.remove(+id);
  }
} 