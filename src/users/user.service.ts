import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async update(id: number, updateData: Partial<User>): Promise<User> {
    await this.userRepository.update(id, updateData);
    return this.userRepository.findOne({ where: { id } });
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findByNome(nome: string): Promise<User[]> {
    return this.userRepository.find({
      where: {
        nome: ILike(`%${nome}%`)
      }
    });
  }

  async findByEmailOrNome(search: string): Promise<User[]> {
    return this.userRepository.find({
      where: [
        { email: ILike(`%${search}%`) },
        { nome: ILike(`%${search}%`) }
      ]
    });
  }
}
