import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { Cartao } from './interfaces/cartao.interface';

@Controller('cartoes')
export class CartoesController {
  constructor(private readonly cartoesService: CartoesService) {}

  @Post()
  create(@Body() createCartaoDto: CreateCartaoDto): Cartao {
    // TODO: Pegar userId do token de autenticação
    const userId = 'user-test-id';
    return this.cartoesService.create(createCartaoDto, userId);
  }

  @Get()
  findAll(): Cartao[] {
    // TODO: Pegar userId do token de autenticação
    const userId = 'user-test-id';
    return this.cartoesService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Cartao {
    // TODO: Pegar userId do token de autenticação
    const userId = 'user-test-id';
    return this.cartoesService.findOne(id, userId);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    // TODO: Pegar userId do token de autenticação
    const userId = 'user-test-id';
    return this.cartoesService.delete(id, userId);
  }
} 