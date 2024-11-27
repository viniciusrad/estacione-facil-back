import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DadosBancariosController } from './dados-bancarios.controller';
import { DadosBancariosService } from './dados-bancarios.service';
import { DadosBancarios } from './entity/dados-bancarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DadosBancarios])],
  controllers: [DadosBancariosController],
  providers: [DadosBancariosService],
  exports: [DadosBancariosService],
})
export class DadosBancariosModule {} 