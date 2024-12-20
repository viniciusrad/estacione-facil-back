import { Controller, Get, Post, Put, Delete, Body, Param, Query, BadRequestException } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { AdminUser } from '../entities/admin-user.entity';
import { UserType } from './enums/user-type.enum';
import { User } from '../entities/user.entity';

@Controller('admin/users')
export class AdminUsersController {
  constructor(private readonly adminUsersService: AdminUsersService) {}

  @Post()
  async create(@Body() createAdminUserDto: CreateAdminUserDto): Promise<AdminUser> {
    try {
      let lastId = Math.max(...this.adminUsersService.findAll().map(user => user.id), 0);
      if (lastId === -Infinity) {
        lastId = 0;
      }
      const adminData = {
        ...createAdminUserDto,
        id: lastId + 1,
        tipo: UserType.ADMIN
      };

      const existingUserEmail = this.adminUsersService.findByEmail(adminData.email);
      const existingUserCpf = this.adminUsersService.findByCpf(adminData.cpf);

      if (existingUserEmail) {
        throw new BadRequestException('Email já cadastrado');
      }

      if (existingUserCpf) {
        throw new BadRequestException('CPF já cadastrado');
      }

      return this.adminUsersService.create(adminData as User);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll(@Query('tipo') tipo?: UserType): AdminUser[] {
    if (tipo) {
      return this.adminUsersService.findByType(tipo);
    }
    return this.adminUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): AdminUser {
    const admin = this.adminUsersService.findOne(+id);
    if (!admin) {
      throw new BadRequestException('Usuário não encontrado');
    }
    return admin;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: Partial<AdminUser>): AdminUser {
    return this.adminUsersService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.adminUsersService.remove(+id);
  }

  @Get('mock/all')
  getMockUsers(): AdminUser[] {
    return this.adminUsersService.getAllMockUsers();
  }
} 