import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { VagasService } from './vagas.service';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { Vaga } from './interfaces/vaga.interface';

@Controller('vagas')
export class VagasController {
  constructor(private readonly vagasService: VagasService) {}

  @Post()
  create(@Body() createVagaDto: CreateVagaDto): Vaga {
    return this.vagasService.create(createVagaDto);
  }

  @Get()
  findAll(): Vaga[] {
    return this.vagasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Vaga {
    return this.vagasService.findOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.vagasService.delete(id);
  }
} 