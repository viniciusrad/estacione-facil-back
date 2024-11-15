import { Injectable } from '@nestjs/common';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { Vaga, TipoVaga, TipoContratacao, StatusVaga } from './entity/vaga.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VagasService {
  constructor(
    @InjectRepository(Vaga)
    private readonly vagaRepository: Repository<Vaga>,
  ) {}

  async create(createVagaDto: CreateVagaDto): Promise<Vaga> {
    const { tipoVaga, tipoContratacao, status, ...restDto } = createVagaDto;
    
    const vaga = this.vagaRepository.create({
      ...restDto,
      tipoVaga: tipoVaga as TipoVaga,
      tipoContratacao: tipoContratacao as TipoContratacao,
      status: status as StatusVaga,
      dataCriacao: new Date(),
      dataAtualizacao: new Date(),
    });
    return await this.vagaRepository.save(vaga);
  }

  async findAll(): Promise<Vaga[]> {
    return await this.vagaRepository.find();
  }

  async findOne(id: string): Promise<Vaga> {
    return await this.vagaRepository.findOne({ where: { id } });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.vagaRepository.delete(id);
    return result.affected > 0;
  }

  async update(id: string, updateVagaDto: Partial<Vaga>): Promise<Vaga> {
    await this.vagaRepository.update(id, {
      ...updateVagaDto,
      dataAtualizacao: new Date(),
    });
    return this.findOne(id);
  }
} 