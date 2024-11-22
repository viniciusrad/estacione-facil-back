import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AgendamentoService } from './agendamento.service';
import { Agendamento } from './entities/agendamento.entity';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
// import { AuthGuard } from '@nestjs/passport';

@Controller('agendamentos')
// @UseGuards(AuthGuard('jwt'))
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Post()
  create(@Body() createAgendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    return this.agendamentoService.create(createAgendamentoDto);
  }

  @Get()
  findAll(): Promise<Agendamento[]> {
    return this.agendamentoService.findAll();
  }

  @Get('cliente/:clienteId')
  findByCliente(@Param('clienteId') clienteId: string): Promise<Agendamento[]> {
    return this.agendamentoService.findByCliente2(clienteId);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Agendamento> {
    return this.agendamentoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Agendamento>,
  ): Promise<Agendamento> {
    return this.agendamentoService.update(id, updateData);
  }

  @Put(':id/cancel')
  cancel(@Param('id') id: string): Promise<void> {
    return this.agendamentoService.cancel(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.agendamentoService.remove(id);
  }
} 