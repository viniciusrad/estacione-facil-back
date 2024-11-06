import { Injectable } from '@nestjs/common';
import { CreateVagaDto } from './dto/create-vaga.dto';
import { Vaga } from './interfaces/vaga.interface';
import { VAGAS_MOCK } from './mock/vagas.mock';

@Injectable()
export class VagasService {
  private vagas: Vaga[] = [...VAGAS_MOCK];
  private currentId = 3; // Começando do 3 já que temos 2 vagas no mock

  create(createVagaDto: CreateVagaDto): Vaga {
    const vaga: Vaga = {
      id: (this.currentId + 1).toString(),
      ...createVagaDto,
      dataCriacao: new Date().toISOString(),
      dataAtualizacao: new Date().toISOString(),
    };

    this.vagas.push(vaga);
    this.currentId++;
    return vaga;
  }

  findAll(): Vaga[] {
    return this.vagas;
  }

  findOne(id: string): Vaga {
    return this.vagas.find(vaga => vaga.id === id);
  }

  delete(id: string): boolean {
    const index = this.vagas.findIndex(vaga => vaga.id === id);
    if (index >= 0) {
      this.vagas.splice(index, 1);
      return true;
    }
    return false;
  }
} 