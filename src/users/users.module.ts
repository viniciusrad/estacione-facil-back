import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminUser } from './entities/admin-user.entity';
import { ProprietarioController } from './proprietario/proprietario.controller';
import { ProprietarioService } from './proprietario/proprietario.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdminUser])],
  controllers: [ProprietarioController, ClienteController],
  providers: [ProprietarioService, ClienteService],
  exports: [ProprietarioService, ClienteService]
})
export class UsersModule {} 