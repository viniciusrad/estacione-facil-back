import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agendamento } from './entities/agendamento.entity';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';

@Injectable()
export class AgendamentoService {
    constructor(
        @InjectRepository(Agendamento)
        private readonly agendamentoRepository: Repository<Agendamento>,
    ) { }

    async create(createAgendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
        const agendamento = this.agendamentoRepository.create(createAgendamentoDto);
        return await this.agendamentoRepository.save(agendamento);
    }

    async findAll(): Promise<Agendamento[]> {
        return await this.agendamentoRepository.find({
            where: { cancelado: false },
            order: { createdAt: 'DESC' }
        });
    }

    async findOne(id: string): Promise<Agendamento> {
        const agendamento = await this.agendamentoRepository.findOne({
            where: { id, cancelado: false }
        });

        if (!agendamento) {
            throw new NotFoundException(`Agendamento com ID ${id} não encontrado`);
        }

        return agendamento;
    }

    async findByCliente(clienteId: string): Promise<Agendamento[]> {
        return await this.agendamentoRepository.find({
            where: { clienteId, cancelado: false },
            order: { dataInicio: 'DESC' }
        });
    }
    async findByCliente2(clienteId: string): Promise<any[]> {
        const query = `
 SELECT 
  a.*,
  v."endereco" AS endereco
FROM 
  "agendamentos" a
LEFT JOIN 
  "vaga" v 
ON 
  v."id"::TEXT = a."vagaId"::TEXT
WHERE 
  a."clienteId" = $1
  AND a."cancelado" = false
ORDER BY 
  a."dataInicio" DESC;
  `;

        return await this.agendamentoRepository.query(query, [clienteId]);
    }

    async update(id: string, updateData: Partial<Agendamento>): Promise<Agendamento> {
        const agendamento = await this.findOne(id);

        Object.assign(agendamento, updateData);
        return await this.agendamentoRepository.save(agendamento);
    }

    async cancel(id: string): Promise<void> {
        const agendamento = await this.findOne(id);
        agendamento.cancelado = true;
        await this.agendamentoRepository.save(agendamento);
    }

    async remove(id: string): Promise<void> {
        const result = await this.agendamentoRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Agendamento com ID ${id} não encontrado`);
        }
    }
} 