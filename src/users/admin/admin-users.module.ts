import { Module } from '@nestjs/common';
import { AdminUsersService } from './admin-users.service';
import { AdminUsersController } from './admin-users.controller';
import { ProprietarioController } from './proprietario.controller';
import { ClienteController } from './cliente.controller';

@Module({
  controllers: [AdminUsersController, ProprietarioController, ClienteController],
  providers: [AdminUsersService],
  exports: [AdminUsersService],
})
export class AdminUsersModule {} 