import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminUser } from '../entities/admin-user.entity';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { UserType } from '../admin/enums/user-type.enum';
import { User } from '../entities/user.entity';

@Injectable()
export class ProprietarioService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createProprietarioDto: CreateProprietarioDto): Promise<User> {
    const existingUserEmail = await this.findByEmail(createProprietarioDto.email);
    if (existingUserEmail) {
      throw new BadRequestException('Email já cadastrado');
    }

    const existingUserCpf = await this.findByCpf(createProprietarioDto.cpf);
    if (existingUserCpf) {
      throw new BadRequestException('CPF já cadastrado');
    }

    const proprietario = this.userRepository.create({
      ...createProprietarioDto,
      tipo: UserType.PROPRIETARIO,
    });

    return await this.userRepository.save(proprietario);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
      where: { tipo: UserType.PROPRIETARIO }
    });
  }

  async findOne(id: number): Promise<User> {
    const proprietario = await this.userRepository.findOne({
      where: { id, tipo: UserType.PROPRIETARIO }
    });

    if (!proprietario) {
      throw new BadRequestException('Proprietário não encontrado');
    }

    return proprietario;
  }

  async update(id: number, updateProprietarioDto: UpdateProprietarioDto): Promise<AdminUser> {
    const proprietario = await this.findOne(id);
    
    if (updateProprietarioDto.email) {
      const existingEmail = await this.findByEmail(updateProprietarioDto.email);
      if (existingEmail && existingEmail.id !== id) {
        throw new BadRequestException('Email já cadastrado');
      }
    }

    if (updateProprietarioDto.cpf) {
      const existingCpf = await this.findByCpf(updateProprietarioDto.cpf);
      if (existingCpf && existingCpf.id !== id) {
        throw new BadRequestException('CPF já cadastrado');
      }
    }

    await this.userRepository.update(id, updateProprietarioDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const proprietario = await this.findOne(id);
    await this.userRepository.remove(proprietario);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ where: { email } });
  }

  async findByCpf(cpf: string): Promise<User | undefined> {
    return await this.userRepository.findOne({ 
      where: { 
        cpf,
        tipo: UserType.PROPRIETARIO 
      } 
    });
  }
} 