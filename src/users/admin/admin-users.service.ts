import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminUserDto } from './dto/create-admin-user.dto';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { AdminUser } from '../entities/admin-user.entity';
import { UserType } from './enums/user-type.enum';
import { mockUsers } from '../mock/users.mock';
import { BaseUserDto } from './dto/base-user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class AdminUsersService {
  private users: AdminUser[] = [...mockUsers];

  create(createUserDto: BaseUserDto): User {
    const user = {
      id: Math.max(...this.users.map(u => u.id)) + 1,
      ...createUserDto,
      tipo: createUserDto.tipo,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.users.push(user);
    return user;
  }

  findAll(): AdminUser[] {
    return this.users;
  }

  findOne(id: number): AdminUser {
    return this.users.find(user => user.id === id);
  }

  findByType(tipo: UserType): AdminUser[] {
    return this.users.filter(user => user.tipo === tipo);
  }

  findByEmail(email: string): AdminUser | undefined {
    return this.users.find(user => user.email === email);
  }

  findByCpf(cpf: string): AdminUser | undefined {
    return this.users.find(user => user.cpf === cpf);
  }

  update(id: number, updateUserDto: Partial<AdminUser>): AdminUser {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }

    const updatedUser = {
      ...this.users[userIndex],
      ...updateUserDto,
      updatedAt: new Date(),
    };

    this.users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id: number): void {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new NotFoundException(`Usuário com ID ${id} não encontrado`);
    }
    this.users.splice(userIndex, 1);
  }

  getAllMockUsers(): AdminUser[] {
    return mockUsers;
  }
} 