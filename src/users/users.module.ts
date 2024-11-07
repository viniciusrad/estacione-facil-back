import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [ClienteService]
})
export class UsersModule {} 