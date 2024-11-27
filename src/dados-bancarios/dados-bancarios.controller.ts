import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DadosBancariosService } from './dados-bancarios.service';
import { CreateDadosBancariosDto } from './dto/create-dados-bancarios.dto';
import { DadosBancarios } from './entity/dados-bancarios.entity';

@Controller('dados-bancarios')
export class DadosBancariosController {
  constructor(private readonly dadosBancariosService: DadosBancariosService) {}

  @Post()
  async create(@Body() createDadosBancariosDto: CreateDadosBancariosDto): Promise<DadosBancarios> {
    return await this.dadosBancariosService.create(createDadosBancariosDto);
  }

  @Get()
  async findAll(): Promise<DadosBancarios[]> {
    return await this.dadosBancariosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DadosBancarios> {
    return await this.dadosBancariosService.findOne(id);
  }

  @Get('user/:userId')
  async findByUserId(@Param('userId') userId: string): Promise<DadosBancarios[]> {
    return await this.dadosBancariosService.findByUserId(userId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<DadosBancarios>,
  ): Promise<DadosBancarios> {
    return await this.dadosBancariosService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.dadosBancariosService.delete(id);
  }
} 