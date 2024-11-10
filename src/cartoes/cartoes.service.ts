import { Injectable } from '@nestjs/common';
import { CreateCartaoDto } from './dto/create-cartao.dto';
import { Cartao } from './entities/cartao.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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

  async delete(id: string, userId: string): Promise<boolean> {
    const result = await this.cartaoRepository.delete({ numeroCartao: id, userId });
    return result.affected && result.affected > 0;
  }
} 