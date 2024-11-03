import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { AdminUser } from './entities/admin-user.entity';
import { UserType } from './enums/user-type.enum';

@Controller('proprietario')
export class ProprietarioController {
  constructor(private readonly adminUsersService: AdminUsersService) {}

  @Post('cadastro')
  async create(@Body() createProprietarioDto: CreateProprietarioDto): Promise<AdminUser> {
    try {
      const proprietarioData = {
        ...createProprietarioDto,
        tipo: UserType.PROPRIETARIO
      };

      const existingUserEmail = this.adminUsersService.findByEmail(proprietarioData.email);
      const existingUserCpf = this.adminUsersService.findByCpf(proprietarioData.cpf);

      if (existingUserEmail) {
        throw new BadRequestException('Email já cadastrado');
      }

      if (existingUserCpf) {
        throw new BadRequestException('CPF já cadastrado');
      }

      return this.adminUsersService.create(proprietarioData);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll(): AdminUser[] {
    return this.adminUsersService.findByType(UserType.PROPRIETARIO);
  }

  @Get(':id')
  findOne(@Param('id') id: string): AdminUser {
    const proprietario = this.adminUsersService.findOne(+id);
    if (!proprietario || proprietario.tipo !== UserType.PROPRIETARIO) {
      throw new BadRequestException('Proprietário não encontrado');
    }
    return proprietario;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProprietarioDto: Partial<CreateProprietarioDto>): AdminUser {
    return this.adminUsersService.update(+id, updateProprietarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.adminUsersService.remove(+id);
  }
} 