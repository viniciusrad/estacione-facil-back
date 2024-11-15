import { Module } from '@nestjs/common';
import { VagasController } from './vagas.controller';
import { VagasService } from './vagas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vaga } from './entity/vaga.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vaga])],
  controllers: [VagasController],
  providers: [VagasService],
})
export class VagasModule {} 