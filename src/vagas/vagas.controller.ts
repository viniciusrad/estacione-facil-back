import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { VagasService } from './vagas.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { Vaga } from './entity/vaga.entity';

@Controller('vagas')
export class VagasController {
  constructor(private readonly vagasService: VagasService) {}

  @Post()
  async create(@Body() createVagaDto: CreateVagaDto): Promise<Vaga> {
    return await this.vagasService.create(createVagaDto);
  }

  @Get()
  async findAll(): Promise<Vaga[]> {
    return await this.vagasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vaga> {
    return await this.vagasService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.vagasService.delete(id);
  }
} 