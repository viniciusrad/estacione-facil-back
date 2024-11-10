import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { Cartao } from './entities/cartao.entity';

@Controller('cartoes')
export class CartoesController {
  constructor(private readonly cartoesService: CartoesService) {}

  @Post()
  create(@Body() createCartaoDto: CreateCartaoDto): Promise<Cartao> {
    // TODO: Pegar userId do token de autenticação
    return this.cartoesService.create(createCartaoDto);
  }

  @Get()
  async findAll(): Promise<Cartao[]> {
    return await this.cartoesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cartao[]> {
    // TODO: Pegar userId do token de autenticação
    return await this.cartoesService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    // TODO: Pegar userId do token de autenticação
    const userId = 'user-test-id';
    return await this.cartoesService.delete(id, userId);
  }
} 