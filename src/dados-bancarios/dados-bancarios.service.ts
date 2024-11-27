import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { DadosBancarios } from './entity/dados-bancarios.entity';
import { CreateDadosBancariosDto } from './dto/create-dados-bancarios.dto';

@Injectable()
export class DadosBancariosService {
  constructor(
    @InjectRepository(DadosBancarios)
    private readonly dadosBancariosRepository: Repository<DadosBancarios>,
  ) {}

  async create(createDadosBancariosDto: CreateDadosBancariosDto): Promise<DadosBancarios> {
    const dadosBancarios = this.dadosBancariosRepository.create({
      ...createDadosBancariosDto,
      dataCriacao: new Date(),
      dataAtualizacao: new Date(),
    });
    return await this.dadosBancariosRepository.save(dadosBancarios);
  }

  async findAll(): Promise<DadosBancarios[]> {
    return await this.dadosBancariosRepository.find();
  }

  async findOne(id: string): Promise<DadosBancarios> {
    const dadosBancarios = await this.dadosBancariosRepository.findOne({ where: { id } });
    if (!dadosBancarios) {
      throw new NotFoundException(`Dados bancários com ID ${id} não encontrados`);
    }
    return dadosBancarios;
  }

  async findByUserId(userId: string): Promise<DadosBancarios[]> {
    return await this.dadosBancariosRepository.find({ where: { userId } });
  }

  async update(id: string, updateData: Partial<DadosBancarios>): Promise<DadosBancarios> {
    await this.findOne(id); // Verifica se existe
    await this.dadosBancariosRepository.update(id, {
      ...updateData,
      dataAtualizacao: new Date(),
    });
    return this.findOne(id);
  }

  async updateByUserId(id: string, updateDadosBancariosDto: Partial<CreateDadosBancariosDto>): Promise<UpdateResult> {
    const dadosBancarios = await this.dadosBancariosRepository.findOne({ where: { userId: id } });
    if (!dadosBancarios) {
      throw new NotFoundException('Dados bancários não encontrados');
    }
    return await this.dadosBancariosRepository.update(dadosBancarios.id, updateDadosBancariosDto);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.dadosBancariosRepository.delete(id);
    return result.affected > 0;
  }
} 