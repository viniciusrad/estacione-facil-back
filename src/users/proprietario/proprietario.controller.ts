import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { AdminUser } from '../entities/admin-user.entity';
import { User } from '../entities/user.entity';

@Controller('proprietario')
export class ProprietarioController {
  constructor(private readonly proprietarioService: ProprietarioService) {}

  @Post()
  async create(@Body() createProprietarioDto: CreateProprietarioDto): Promise<User> {
    return await this.proprietarioService.create(createProprietarioDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.proprietarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return await this.proprietarioService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProprietarioDto: UpdateProprietarioDto
  ): Promise<AdminUser> {
    return await this.proprietarioService.update(+id, updateProprietarioDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.proprietarioService.remove(+id);
  }
} 