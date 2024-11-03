import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { CartoesModule } from './cartoes/cartoes.module';

@Module({
  imports: [UsersModule, VehiclesModule, CartoesModule],
})
export class AppModule {} 
