import { Injectable } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { Cartao } from './interfaces/cartao.interface';
import { CARTOES_MOCK } from './mock/cartoes.mock';

@Injectable()
export class CartoesService {
  private cartoes: Cartao[] = [...CARTOES_MOCK];
  private currentId = 4;

  create(createCartaoDto: CreateCartaoDto, userId: string): Cartao {
    const cartao: Cartao = {
      id: this.currentId.toString(),
      ...createCartaoDto,
      userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.cartoes.push(cartao);
    this.currentId++;
    return cartao;
  }

  findAll(userId: string): Cartao[] {
    return this.cartoes.filter(cartao => cartao.userId === userId);
  }

  findOne(id: string, userId: string): Cartao {
    return this.cartoes.find(cartao => cartao.id === id && cartao.userId === userId);
  }

  delete(id: string, userId: string): boolean {
    const index = this.cartoes.findIndex(cartao => cartao.id === id && cartao.userId === userId);
    if (index >= 0) {
      this.cartoes.splice(index, 1);
      return true;
    }
    return false;
  }
} 