import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { Cartao } from './entities/cartao.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateCartaoDto } from './dto/update-cartao.dto';

@Injectable()
export class CartoesService {
  // private cartoes: Cartao[] = [...CARTOES_MOCK];
  // private currentId = 4;

  cartoes: Cartao[] = [];

  
  constructor(
    @InjectRepository(Cartao)
    private readonly cartaoRepository: Repository<Cartao>,
  ) {}
  
  

  create(createCartaoDto: CreateCartaoDto): Promise<Cartao> {
    const cartao: Partial<Cartao> = {
      ...createCartaoDto,
      validade: new Date(createCartaoDto.validade),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    return this.cartaoRepository.save(cartao);
  }

  async findAll(): Promise<Cartao[]> {
    return await this.cartaoRepository.find();
  }

  async findOne(userId: string): Promise<Cartao[]> {
    return await this.cartaoRepository.find({ where: { userId } });
  }

  async findOneByUserId(userId: string): Promise<Cartao[]> {
    return await this.cartaoRepository.find({ where: { userId } });
  }

  async updateByUserId(id: string, updateCartaoDto: UpdateCartaoDto): Promise<UpdateResult> {
    debugger
    const cartao = await this.cartaoRepository.findOne({ where: { userId: id } });
    if (!cartao) {
      throw new NotFoundException('Cartão não encontrado');
    }
    return await this.cartaoRepository.update(cartao.id, updateCartaoDto);
  }

  // async update(id: string, updateCartaoDto: Partial<UpdateCartaoDto>): Promise<UpdateResult> {
  //   return await this.cartaoRepository.update(id, updateCartaoDto);
  // }

  async delete(id: string, userId: string): Promise<boolean> {
    const result = await this.cartaoRepository.delete({ numeroCartao: id, userId });
    return result.affected && result.affected > 0;
  }
} 