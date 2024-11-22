import { Controller, Post, Body, Get, Param, Delete, Patch } from '@nestjs/common';
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

  @Get('indisponiveis')
  async fetchIndisponiveis(): Promise<Vaga[]> {
    return await this.vagasService.fetchIndisponiveis();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vaga> {
    return await this.vagasService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.vagasService.delete(id);
  }

  @Patch('status/:id')
  async alterarStatus(@Param('id') id: string): Promise<Vaga> {
    return await this.vagasService.alterarStatusVaga(id);
  }
} 