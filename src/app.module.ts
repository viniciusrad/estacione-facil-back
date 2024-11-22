import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminUsersModule } from './users/admin/admin-users.module';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { CartoesModule } from './cartoes/cartoes.module';
import { VagasModule } from './vagas/vagas.module';
import { AgendamentoModule } from './agendamento/agendamento.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.SUPABASE_HOST,
      port: parseInt(process.env.SUPABASE_PORT),
      username: process.env.SUPABASE_USER,
      password: process.env.SUPABASE_PASSWORD,
      database: process.env.SUPABASE_DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
      logging: true,
    }),
    AdminUsersModule,
    UsersModule,
    VehiclesModule,
    CartoesModule,
    VagasModule,
    AgendamentoModule,
  ],
})
export class AppModule { } 
