import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ProprietarioController } from './proprietario/proprietario.controller';
import { ProprietarioService } from './proprietario/proprietario.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [
    ProprietarioController, 
    ClienteController,
    LoginController,
    UserController
  ],
  providers: [
    ProprietarioService, 
    ClienteService, 
    LoginService,
    UserService
  ],
  exports: [
    ProprietarioService, 
    ClienteService, 
    LoginService
  ]
})
export class UsersModule {} 