import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { UserType } from '../admin/enums/user-type.enum';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createClienteDto: CreateClienteDto) {
    const cliente = this.userRepository.create({
      ...createClienteDto,
    });
    return await this.userRepository.save(cliente);
  }

  async findAll() {
    return await this.userRepository.find({
      where: { tipo: UserType.CLIENTE }
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id, tipo: UserType.CLIENTE }
    });
  }

  async update(id: number, updateClienteDto: UpdateClienteDto) {
    await this.userRepository.update(
      { id, tipo: UserType.CLIENTE },
      updateClienteDto
    );
    return this.findOne(id);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    if (cliente) {
      await this.userRepository.remove(cliente);
    }
    return cliente;
  }
}