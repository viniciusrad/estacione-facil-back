import { Module } from '@nestjs/common';
import { CartoesController } from './cartoes.controller';
import { CartoesService } from './cartoes.service';
import { Cartao } from './entities/cartao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cartao])],
  controllers: [CartoesController],
  providers: [CartoesService],
})
export class CartoesModule {} 