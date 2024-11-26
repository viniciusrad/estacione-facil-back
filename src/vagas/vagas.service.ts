import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findByUserId(userId: string): Promise<Vaga[]> {
    return await this.vagaRepository.find({ where: { proprietarioId: userId } });
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

  async fetchIndisponiveis(): Promise<Vaga[]> {
    return await this.vagaRepository.find({ where: { status: StatusVaga.INDISPONIVEL } });
  }

  

  async update(id: string, updateVagaDto: Partial<Vaga>): Promise<Vaga> {
    await this.vagaRepository.update(id, {
      ...updateVagaDto,
      dataAtualizacao: new Date(),
    });
    return this.findOne(id);
  }

  async alterarStatusVaga(id: string): Promise<Vaga> {
    const vaga = await this.vagaRepository.findOne({ where: { id } });
    
    if (!vaga) {
      throw new NotFoundException(`Vaga com ID ${id} não encontrada`);
    }

    // Inverte o status atual da vaga
    vaga.status = vaga.status === StatusVaga.DISPONIVEL ? StatusVaga.INDISPONIVEL : StatusVaga.DISPONIVEL;

    // Salva a vaga atualizada no banco
    return await this.vagaRepository.save(vaga);
  }
} 