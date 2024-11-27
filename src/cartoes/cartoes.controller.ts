import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { CartoesService } from './cartoes.service';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { Cartao } from './entities/cartao.entity';
import { UpdateCartaoDto } from './dto/update-cartao.dto';
import { UpdateResult } from 'typeorm';

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

  @Get('user/:userId')
  async findOneByUserId(@Param('userId') userId: string): Promise<Cartao[]> {
    // TODO: Pegar userId do token de autenticação
    return await this.cartoesService.findOneByUserId(userId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCartaoDto: UpdateCartaoDto): Promise<UpdateResult> {
    return await this.cartoesService.updateByUserId(id, updateCartaoDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    // TODO: Pegar userId do token de autenticação
    const userId = 'user-test-id';
    return await this.cartoesService.delete(id, userId);
  }
} 